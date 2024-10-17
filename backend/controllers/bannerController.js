const Banner = require("../models/bannerModel");

exports.addBanner = async (req, res) => {
  try {
    const isExist = await Banner.findOne();
    if (isExist) {
      return res.json({
        success: false,
        message: "Banner already exist",
      });
    }

    const data = {
      ...req?.body,
    };

    const result = await Banner.create(data);

    res.status(201).json({
      success: true,
      message: "Banner created successfully",
      data: result,
    });
  } catch (err) {
    res.json({
      success: false,
      message: err.message,
    });
  }
};

exports.getBanner = async (req, res) => {
  try {
    const result = await Banner.findOne();

    if (!result) {
      return res.json({
        success: false,
        message: "Banner not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Banner fetched successfully",
      data: result,
    });
  } catch (err) {
    res.json({
      success: false,
      message: err.message,
    });
  }
};

exports.updateBanner = async (req, res) => {
  const id = req?.params?.id;

  try {
    const isExist = await Banner.findById(id);

    if (!isExist) {
      return res.json({
        success: false,
        message: "Banner not found",
      });
    }

    const data = {
      ...req?.body,
    };

    const result = await Banner.findByIdAndUpdate(id, data, {
      new: true,
    });

    res.status(200).json({
      success: true,
      message: "Banner updated successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
