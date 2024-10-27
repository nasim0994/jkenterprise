import { useGetAllProductsQuery } from "../../Redux/product/productApi";
import { useDispatch } from "react-redux";
import { setSelectedProduct } from "../../Redux/product/productSlice";
import { useState } from "react";
import ProductModal from "./ProductModal";

export default function Products() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const [showModal, setShowModal] = useState(false);

  const { data } = useGetAllProductsQuery();
  let products = data?.data;

  return (
    <section className="py-8" id="products">
      <div className="container">
        <div className=" flex bg-primary justify-center py-3 rounded-xl">
          <h3 className="font-bold text-white text-2xl">Our Products</h3>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 gap-2">
          {products?.map((product) => (
            <div
              key={product?._id}
              className="border shadow p-2.5 pb-4 rounded product_card"
            >
              <button
                onClick={() => {
                  setProduct(product);
                  setShowModal(!showModal);
                }}
                className="w-full"
              >
                <img
                  src={
                    import.meta.env.VITE_BACKEND_URL +
                    "/product/" +
                    product?.img
                  }
                  alt="Product Image"
                  className="w-full rounded border shadow-sm sm:h-72"
                />
              </button>

              <div>
                <h2
                  className="hidden md:block text-lg font-bold mt-4 cursor-pointer"
                  onClick={() => {
                    setProduct(product);
                    setShowModal(!showModal);
                  }}
                >
                  {product?.title?.length > 26
                    ? product?.title.slice(0, 26) + "..."
                    : product?.title}
                </h2>

                <h2
                  className="md:hidden text-lg font-bold mt-4 cursor-pointer"
                  onClick={() => {
                    setProduct(product);
                    setShowModal(!showModal);
                  }}
                >
                  {product?.title}
                </h2>

                <div className="mt-2">
                  <p className="font-semibold">Price: {product?.price} ৳</p>
                </div>

                <div className="mt-2 grid grid-cols-2 gap-2 text-center">
                  <button
                    onClick={() => {
                      setProduct(product);
                      setShowModal(!showModal);
                    }}
                    className="buy_btn py-1.5 px-2.5 border border-transparent bg-green-700 rounded text-sm text-white hover:border-gray-500 hover:bg-transparent hover:text-black duration-300"
                  >
                    See More
                  </button>
                  <a
                    href="#order"
                    onClick={() => dispatch(setSelectedProduct(product))}
                    className="buy_btn py-1.5 px-2.5 border border-transparent bg-primary rounded text-sm text-white hover:border-gray-500 hover:bg-transparent hover:text-black duration-300"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProductModal
        showModal={showModal}
        setShowModal={setShowModal}
        product={product}
      />
    </section>
  );
}
