import { useRef, useState } from "react";
import { MdArrowDropUp, MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { useCreateOrderMutation } from "../../Redux/order/orderApi";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  removeFromCart,
  updateCartQuantity,
} from "../../Redux/product/productSlice";
import { useNavigate } from "react-router-dom";

export default function Order() {
  const orderRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const carts = useSelector((state) => state.product.carts);

  const [shipping, setShipping] = useState(80);

  const [createOrder, { isLoading }] = useCreateOrderMutation();

  const handleRemoveProduct = (productId) => {
    const newCarts = carts?.filter((product) => product?.id !== productId);
    dispatch(removeFromCart(newCarts));
  };

  // Update quantity
  const handleQuantityChange = (id, action) => {
    const updatedCart = carts.map((item) => {
      if (item?.id === id) {
        return {
          ...item,
          quantity:
            action === "increment"
              ? item?.quantity + 1
              : Math.max(item?.quantity - 1, 1),
        };
      }
      return item;
    });

    dispatch(updateCartQuantity(updatedCart));
  };

  // Calculate total price
  const calculateTotal = () => {
    return carts.reduce(
      (total, product) => total + product?.quantity * product?.discountPrice,
      0
    );
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const phone = form.number.value;
    const city = form.city.value;
    const address = form.address.value;

    if (carts?.length === 0) {
      return Swal.fire("", "Please select a product", "warning");
    }

    const orderInfo = {
      name,
      phone,
      city,
      address,
      products: carts?.map((product) => {
        return {
          product: product?.id,
          quantity: product?.quantity,
        };
      }),
      shipping,
      total: calculateTotal() + shipping,
    };

    const res = await createOrder(orderInfo);

    if (res?.data?.success) {
      form.reset();
      Swal.fire(
        "Order Placed!",
        "Your order has been placed successfully.",
        "success"
      );

      dispatch(clearCart());
      navigate(`/order/success/${res?.data?.data?._id}`);
    } else {
      Swal.fire(
        "Order Failed!",
        "Something went wrong. Please try again.",
        "error"
      );
    }
    console.log(res);
  };

  return (
    <section ref={orderRef} className="py-5 sm:py-10" id="order">
      <div className="container">
        <div className="border-2 border-primary rounded p-5 sm:p-10 bg-secondary">
          <h2 className="sm:text-xl font-semibold text-center">
            অর্ডার করতে আপনার সঠিক তথ্য দিয়ে নিচের ফর্মটি সম্পূর্ণ পূরন করুন।
            <br /> (আগে থেকে কোন টাকা দেয়া লাগবে না। প্রোডাক্ট হাতে পাবার পর
            টাকা দিবেন)
          </h2>

          <form
            onSubmit={handlePlaceOrder}
            className="mt-6 grid md:grid-cols-2 gap-6 lg:gap-16"
          >
            <div>
              <h2 className="text-lg font-medium">Billing Details</h2>
              <br />
              <div className="flex flex-col gap-3">
                <div>
                  <small className="text-neutral-content">
                    আপনার নাম লিখুন *
                  </small>
                  <input type="text" name="name" required />
                </div>

                <div>
                  <small className="text-neutral-content">
                    আপনার মোবাইল নাম্বারটি লিখুন *
                  </small>
                  <input type="text" name="number" required />
                </div>

                <div>
                  <small className="text-neutral-content">
                    আপনার শহরের নাম লিখুন *
                  </small>
                  <input type="text" name="city" required />
                </div>

                <div>
                  <small className="text-neutral-content">
                    আপনার সম্পূর্ণ ঠিকানা লিখুন *
                  </small>
                  <textarea name="address" rows="4" required></textarea>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium">Your Order</h2>
              <div>
                {carts.map((product) => (
                  <div
                    key={product?.id}
                    className="flex justify-between items-center border-b py-2 border-dashed border-gray-400"
                  >
                    <div className="w-full flex items-center justify-between gap-1">
                      <div className="flex items-center gap-2">
                        <div>
                          <MdDelete
                            onClick={() => handleRemoveProduct(product?.id)}
                            className="text-red-500 cursor-pointer text-xl"
                          />
                        </div>

                        <div className="flex items-center gap-2">
                          <img
                            src={
                              import.meta.env.VITE_BACKEND_URL +
                              "/product/" +
                              product?.img
                            }
                            alt="product"
                            className="w-11 h-11 rounded"
                          />

                          <div>
                            <p className="text-neutral text-[15px]">
                              {product?.title}
                            </p>

                            <div className="mt-1 flex items-center gap-2">
                              <div
                                onClick={() =>
                                  handleQuantityChange(product?.id, "decrement")
                                }
                                className="px-1.5 border cursor-pointer border-neutral rounded"
                              >
                                -
                              </div>
                              <span>{product.quantity}</span>
                              <div
                                onClick={() =>
                                  handleQuantityChange(product?.id, "increment")
                                }
                                className="px-1.5 border border-neutral rounded cursor-pointer"
                              >
                                +
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p>{product?.discountPrice} টাকা</p>
                    </div>
                  </div>
                ))}
                <div className="flex justify-between items-center border-b py-2.5 border-dashed border-gray-400">
                  <p className="text-neutral-content">Subtotal</p>
                  <p className="text-primary flex items-center gap-px">
                    {calculateTotal()} টাকা
                  </p>
                </div>
                <div className="flex justify-between items-center border-b py-2.5 border-dashed border-gray-400">
                  <p className="text-neutral-content">Shipping</p>
                  <div>
                    <div className="flex items-center text-neutral">
                      <input
                        id="insideDhaka"
                        type="radio"
                        value="80"
                        name="shipping"
                        className="w-4 h-4"
                        onClick={() => setShipping(80)}
                        defaultChecked={shipping === 80}
                      />
                      <label
                        htmlFor="insideDhaka"
                        className="ms-2 text-sm font-medium"
                      >
                        ঢাকার ভিতরে: ৮০ টাকা
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="outsideDhaka"
                        type="radio"
                        value="130"
                        name="shipping"
                        className="w-4 h-4"
                        onClick={() => setShipping(130)}
                        defaultChecked={shipping === 130}
                      />
                      <label
                        htmlFor="outsideDhaka"
                        className="ms-2 text-sm font-medium"
                      >
                        ঢাকার বাহিরে: ১৩০ টাকা
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2 font-medium text-lg">
                  <p className="text-neutral-content">Total</p>
                  <p className="text-primary">
                    {calculateTotal() + shipping} টাকা
                  </p>
                </div>

                <div className="mt-4 bg-gray-100 p-4 rounded text-neutral-content">
                  <h2>ক্যাশ অন ডেলিভারি</h2>
                  <div className="relative bg-gray-200 p-3 rounded mt-3">
                    <p className="text-sm">
                      পণ্য হাতে পেয়ে ডেলিভারি ম্যানকে পেমেন্ট করতে পারবেন।
                    </p>

                    <div className="absolute -top-8 left-6">
                      <MdArrowDropUp className="text-gray-200 text-6xl" />
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <button className="text-center w-full bg-primary text-base-100 rounded py-2.5 font-semibold">
                    {isLoading
                      ? "Loading..."
                      : `অর্ডার কনফার্ম করুন - ${
                          calculateTotal() + shipping
                        } টাকা`}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
