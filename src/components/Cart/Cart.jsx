import React from "react";

import { useParams } from "react-router-dom";

import Model3 from "../../models/home-model.png";

import { Link } from "react-router-dom";

import { IoArrowBackOutline } from "react-icons/io5";

import { useSelector, useDispatch } from "react-redux";

import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../Redux/actions";

const Cart = () => {
  const { id } = useParams();
  const productId = parseInt(id);
  console.log(productId);

  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart);

  const removeItemFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const increaseItemQuantity = (itemId) => {
    dispatch(increaseQuantity(itemId));
  };

  const decreaseItemQuantity = (itemId) => {
    dispatch(decreaseQuantity(itemId));
  };

  return (
    <div>
      <div className=" min-w-[300px]">
        <div className="flex items-center w-full justify-between py-3 px-[25px] shadow-md fixed top-0 bg-white">
          {/* BACK ICON */}
          <Link to={productId ? `/product/${productId}` : "/home"}>
            <IoArrowBackOutline className="text-[#D50D3E] h-[20px] w-[20px] mr-5 drop-shadow-lg" />
          </Link>

          <p className="text-[#D50D3E] font-bold text-[14px] text-center">
            Cart
          </p>

          <img
            src={Model3}
            alt="model"
            className="w-[30px] h-[30px] rounded-full"
          />
        </div>

        {/* CART DETAILS VIEW-------------------------------------------------- */}

        <div className="px-[25px] py-[4.5rem]">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <p className="text-[16px] font-bold mb-5">Your Items</p>
              <div className="lg:px-10">
                <div className="flex flex-col gap-4 lg:grid lg:grid-cols-3 lg:gap-12">
                  {/*CART ITEMS-FLEX */}

                  {cartItems.map((p) => (
                    <div className="flex gap-3 border rounded-md p-3">
                      <div>
                        <img
                          src={p.images[0]}
                          alt=""
                          className="w-[100px] border border-[#D50D3E] rounded-md"
                        />
                      </div>
                      <div className="w-full flex flex-col justify-evenly">
                        <p className="font-semibold text-[12px]  ">{p.title}</p>
                        {/* PRICE DETAILS */}
                        <div className="flex items-center gap-2 text-[12px]">
                          <p className="font-bold text-[14px]">₹ {p.price}</p>
                          <p className="line-through text-gray-400">
                            ₹ {p.mrp}
                          </p>
                          <p className="text-green-700">{p.offer}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          {/* QUANTITY */}
                          <div className="flex items-center text-[12px]">
                            <button
                              className="bg-[#D50D3E] text-white px-2 rounded-sm"
                              onClick={() => decreaseItemQuantity(p.id)}
                            >
                              -
                            </button>
                            <span className="px-2">{p.quantity}</span>
                            <button
                              className="bg-[#D50D3E] text-white  px-2 rounded-sm"
                              onClick={() => increaseItemQuantity(p.id)}
                            >
                              +
                            </button>
                          </div>
                          {/* REMOVE BUTTON */}
                          <button
                            onClick={() => removeItemFromCart(p.id)}
                            className="text-[12px] bg-[#D50D3E] px-1 rounded-sm h-[30px] text-white"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
        {/* FOOTER */}

        <div className="flex items-center fixed bottom-0 w-full justify-between py-3 px-[25px] border-t bg-white">
          <p className="text-[#D50D3E] font-bold">Total</p>
          <div className="flex items-center gap-3">
            <p className="text-[14px] font-bold">
              ₹
              {cartItems.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              )}
            </p>
            <Link to={"/cart/ordered"}>
              <button className="h-[30px] w-[70px] text-[12px] rounded-[15px] bg-[#D50D3E] text-white shadow-md ">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
