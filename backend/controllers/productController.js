const Product = require("../models/productModel");
const fs = require("fs");

exports.addProduct = async (req, res) => {
  const img = req.file ? req.file.filename : null;
  try {
    const { title, price } = req.body;

    const newProduct = new Product({
      title,
      price,
      img,
    });

    const result = await Product.create(newProduct);

    res.status(200).json({
      success: true,
      message: "Product added successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });

    fs.unlink(`./uploads/product/${img}`, (err) => {
      if (err) {
        console.error(err);
      }
    });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.find({});

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.updateProduct = async (req, res) => {
  const img = req.file ? req.file.filename : null;

  try {
    const productId = req.params.id;
    const { title, price } = req.body;

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    if (img) {
      if (product.img) {
        fs.unlinkSync(`uploads/product/${product.img}`);
      }
      product.img = img;
    }

    product.title = title || product.title;
    product.price = price || product.price;

    const updatedProduct = await product.save();

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });

    fs.unlink(`./uploads/product/${img}`, (err) => {
      if (err) {
        console.error(err);
      }
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    if (product.img) {
      fs.unlinkSync(`uploads/product/${product.img}`);
    }

    await Product.findByIdAndDelete(productId);

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const productId = req.params.id;

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
