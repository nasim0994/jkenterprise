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

      <div
        className={`modal w-[93%] sm:w-auto overflow-y-auto h-screen ${
          showModal && "modal_show"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setShowModal(false)}>
            <IoMdCloseCircleOutline className="text-[22px] text-neutral" />
          </button>
        </div>
        <img
          src={import.meta.env.VITE_BACKEND_URL + "/product/" + product?.img}
          alt={product?.title}
          className="w-[90%] sm:w-2/3 mx-auto rounded"
        />

        <div className="p-4 text-center">
          <h2 className="text-2xl font-semibold">{product?.title}</h2>
          <p className="font-semibold text-xl ">Price: {product?.price} ৳</p>
          <p className="text-sm text-gray-600">{product?.description}</p>

          <div className="mt-4">
            <a
              href="#order"
              onClick={() => {
                dispatch(setSelectedProduct(product));
                setShowModal(false);
              }}
              className="primary_btn text-sm"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
