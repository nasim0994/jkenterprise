// import { useState } from "react";
// import { useGetAllProductsQuery } from "../../Redux/product/productApi";
// import { useDispatch, useSelector } from "react-redux";
// // import ProductModal from "./ProductModal";
// import toast from "react-hot-toast";
// import { addToCart } from "../../Redux/product/productSlice";

// export default function Products() {
//   const dispatch = useDispatch();
//   const [product, setProduct] = useState({});
//   const [showModal, setShowModal] = useState(false);
//   const { data } = useGetAllProductsQuery();
//   let products = data?.data;

//   const carts = useSelector((state) => state.product.carts);

//   const handelAddToCart = (product) => {
//     const cartProduct = {
//       _id: product._id,
//       title: product.title,
//       price: product.price,
//       discountPrice: product.discountPrice,
//       img: product.img,
//       quantity: 1,
//     };

//     if (carts?.length > 0) {
//       const isExist = carts?.find((item) => item._id === cartProduct._id);

//       if (isExist) {
//         return toast.error("Product already added to cart");
//       } else {
//         dispatch(addToCart([...carts, cartProduct]));
//         toast.success("Item added to cart successfully");
//       }
//     } else {
//       dispatch(addToCart([cartProduct]));
//       toast.success("Item added to cart successfully");
//     }
//   };

//   console.log(carts);

//   return (
//     <section className="py-8" id="products">
//       <div className="container">
//         <div className=" flex bg-primary justify-center py-3 rounded-xl">
//           <h3 className="font-bold text-white text-2xl">Our Products</h3>
//         </div>
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 gap-3">
//           {products?.map((product) => (
//             <div
//               key={product?._id}
//               className="border shadow p-2.5 pb-4 rounded product_card"
//             >
//               <button
//                 onClick={() => {
//                   setProduct(product);
//                   setShowModal(!showModal);
//                 }}
//                 className="w-full"
//               >
//                 <img
//                   src={
//                     import.meta.env.VITE_BACKEND_URL +
//                     "/product/" +
//                     product?.img
//                   }
//                   alt="Product Image"
//                   className="w-full rounded border shadow-sm sm:h-72"
//                 />
//               </button>

//               <div>
//                 <h2
//                   className="hidden md:block text-lg font-bold mt-4 cursor-pointer"
//                   onClick={() => {
//                     setProduct(product);
//                     setShowModal(!showModal);
//                   }}
//                 >
//                   {product?.title?.length > 30
//                     ? product?.title.slice(0, 30) + "..."
//                     : product?.title}
//                 </h2>

//                 <h2
//                   className="md:hidden text-lg font-bold mt-4 cursor-pointer"
//                   onClick={() => {
//                     setProduct(product);
//                     setShowModal(!showModal);
//                   }}
//                 >
//                   {product?.title}
//                 </h2>

//                 <div className="mt-2">
//                   {product?.discountPrice > 0 ? (
//                     <div className="flex items-center gap-2">
//                       <p className="font-semibold">
//                         Price: {product?.discountPrice}৳
//                       </p>
//                       <del className="font-semibold text-sm text-red-500">
//                         {product?.price}৳
//                       </del>
//                     </div>
//                   ) : (
//                     <p className="font-semibold">Price: {product?.price} ৳</p>
//                   )}
//                 </div>

//                 <div className="mt-2 grid grid-cols-2 gap-2 text-center">
//                   <button
//                     onClick={() => {
//                       setProduct(product);
//                       setShowModal(!showModal);
//                     }}
//                     className="buy_btn py-1.5 px-2.5 border border-transparent bg-green-700 rounded text-sm text-white"
//                   >
//                     See More
//                   </button>
//                   <button
//                     onClick={() => handelAddToCart(product)}
//                     className="buy_btn py-1.5 px-2.5 border border-transparent bg-primary rounded text-sm text-white"
//                   >
//                     Buy Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* <ProductModal
//         showModal={showModal}
//         setShowModal={setShowModal}
//         product={product}
//       /> */}
//     </section>
//   );
// }

import { useState } from "react";
import { useGetAllProductsQuery } from "../../Redux/product/productApi";
import { useDispatch, useSelector } from "react-redux";
import ProductModal from "./ProductModal";
import toast from "react-hot-toast";
import {
  addToCart,
  updateCartQuantity,
} from "../../Redux/product/productSlice";

export default function Products() {
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState({});
  const [showModal, setShowModal] = useState(false);
  const { data } = useGetAllProductsQuery();
  let products = data?.data;

  const carts = useSelector((state) => state.product.carts);

  const handelAddToCart = (product) => {
    const cartProduct = {
      id: product?._id,
      title: product?.title,
      price: product?.price,
      discountPrice: product?.discountPrice,
      img: product?.img,
      quantity: 1,
      stock: product?.stock,
    };

    if (carts?.length > 0) {
      const isExist = carts?.find((item) => item?.id === cartProduct?.id);

      if (isExist) {
        return toast.error("Product already added to cart");
      } else {
        dispatch(addToCart([...carts, cartProduct]));
        toast.success("Item added to cart successfully");
      }
    } else {
      dispatch(addToCart([cartProduct]));
      toast.success("Item added to cart successfully");
    }
  };

  const handleQuantityChange = (id, action) => {
    const updatedCart = carts.map((item) => {
      if (item?.id === id) {
        return {
          ...item,
          quantity:
            action === "increment"
              ? Math.min(item?.quantity + 1, item?.stock)
              : Math.max(item?.quantity - 1, 1),
        };
      }
      return item;
    });

    dispatch(updateCartQuantity(updatedCart));
  };

  return (
    <section className="py-8" id="products">
      <div className="container">
        <div className="flex bg-primary justify-center py-3 rounded-xl">
          <h3 className="font-bold text-white text-2xl">Our Products</h3>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 gap-3">
          {products?.map((product) => {
            const isInCart = carts.find((item) => item?.id === product?._id);
            return (
              <div
                key={product?._id}
                className="border shadow p-2.5 pb-4 rounded product_card"
              >
                <button
                  onClick={() => {
                    setSelectedProduct(product);
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
                      setSelectedProduct(product);
                      setShowModal(!showModal);
                    }}
                  >
                    {product?.title?.length > 30
                      ? product?.title.slice(0, 30) + "..."
                      : product?.title}
                  </h2>

                  <h2
                    className="md:hidden text-lg font-bold mt-4 cursor-pointer"
                    onClick={() => {
                      setSelectedProduct(product);
                      setShowModal(!showModal);
                    }}
                  >
                    {product?.title}
                  </h2>

                  <div className="mt-2">
                    {product?.discountPrice > 0 ? (
                      <div className="flex items-center gap-2">
                        <p className="font-semibold">
                          Price: {product?.discountPrice}৳
                        </p>
                        <del className="font-semibold text-sm text-red-500">
                          {product?.price}৳
                        </del>
                      </div>
                    ) : (
                      <p className="font-semibold">Price: {product?.price} ৳</p>
                    )}
                  </div>

                  <div className="mt-2 grid grid-cols-2 gap-2 text-center">
                    <button
                      onClick={() => {
                        setSelectedProduct(product);
                        setShowModal(!showModal);
                      }}
                      className="buy_btn py-1.5 px-2.5 border border-transparent bg-green-700 rounded text-sm text-white"
                    >
                      See More
                    </button>
                    {isInCart ? (
                      <div className="flex items-center justify-between border rounded border-neutral p-1">
                        <button
                          onClick={() =>
                            handleQuantityChange(product?._id, "decrement")
                          }
                          className="bg-red-500 text-white py-[2px] px-2 rounded"
                        >
                          -
                        </button>
                        <span className="px-4">{isInCart.quantity}</span>
                        <button
                          onClick={() =>
                            handleQuantityChange(product?._id, "increment")
                          }
                          className="bg-green-500 text-white py-[2px] px-2 rounded"
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => handelAddToCart(product)}
                        className="buy_btn py-1.5 px-2.5 border border-transparent bg-primary rounded text-sm text-white"
                      >
                        Buy Now
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <ProductModal
        showModal={showModal}
        setShowModal={setShowModal}
        product={selectedProduct}
      />
    </section>
  );
}
