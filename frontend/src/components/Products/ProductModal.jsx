import { useDispatch } from "react-redux";
import { setSelectedProduct } from "../../Redux/product/productSlice";
import { IoMdCloseCircleOutline } from "react-icons/io";

export default function ProductModal({ showModal, setShowModal, product }) {
  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={() => setShowModal(false)}
        className={`overlay ${showModal && "overlay_show"}`}
      ></button>

      <div className={`modal w-[93%] sm:w-auto ${showModal && "modal_show"}`}>
        <div className="flex justify-end p-4">
          <button onClick={() => setShowModal(false)}>
            <IoMdCloseCircleOutline className="text-[22px] text-neutral" />
          </button>
        </div>
        <img
          src={import.meta.env.VITE_BACKEND_URL + "/product/" + product?.img}
          alt={product?.title}
          className="w-[90%] sm:w-2/3 mx-auto rounded max-h-[100vh]"
        />

        <div className="p-4 text-center">
          <h2 className="text-2xl font-semibold">{product?.title}</h2>
          <p className="font-semibold text-xl mb-3">
            Price: {product?.price} ৳
          </p>
          <a
            href="#order"
            onClick={() => {
              dispatch(setSelectedProduct(product));
              setShowModal(false);
            }}
            className="py-1.5 px-2.5 border border-transparent bg-gray-500 rounded text-sm text-white hover:border-gray-500 hover:bg-transparent hover:text-black duration-300"
          >
            Buy Now
          </a>
        </div>
      </div>
    </>
  );
}
