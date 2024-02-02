import React from "react";
import { FaStar } from "react-icons/fa";

import { useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

import { addToCart } from "../../Redux/actions"; // function name is imported from action ||go ??contin...ok

const ProductDetail = ({ product }) => {
  const [selectedImg, setSelectedImg] = useState(product.images[0]);

  const handleSelectedImage = (image) => {
    setSelectedImg(image);
  };

  const dispatch = useDispatch();

  const addItemToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="flex justify-center">
      <div>
        <h1 className="text-[12px] font-bold w-full text-justify mb-4  lg:text-[16px] lg:hidden">
          {product.title}
        </h1>

        {/* IMAGE VIEW */}
        <div className="lg:flex lg:items-center gap-3">
          <div>
            <img
              src={selectedImg}
              alt=""
              className="w-full h-auto drop-shadow-lg rounded-xl mb-5 lg:mb-0  border-2 border-[#D50D3E] lg:w-[480px] lg:h-auto"
            />
          </div>
          {/* IMAGE GALLERY */}
          <div className="flex flex-row lg:flex-col lg:justify-between gap-3 items-center justify-between my-4">
            <img
              onClick={() => handleSelectedImage(product.images[0])}
              src={product.images[0]}
              alt=""
              className="w-[70px] lg:w-[110px] rounded-md border-2 border-[#D50D3E]"
            />
            <img
              onClick={() => handleSelectedImage(product.images[1])}
              src={product.images[1]}
              alt=""
              className="w-[70px] lg:w-[110px]  rounded-md border-2 border-[#D50D3E]"
            />
            <img
              onClick={() => handleSelectedImage(product.images[2])}
              src={product.images[2]}
              alt=""
              className="w-[70px] lg:w-[110px] rounded-md border-2 border-[#D50D3E]"
            />
            <img
              onClick={() => handleSelectedImage(product.images[3])}
              src={product.images[3]}
              alt=""
              className="w-[70px] lg:w-[110px] rounded-md border-2 border-[#D50D3E]"
            />
          </div>
          <div className="flex lg:flex-col lg:items-start items-center mt-8 lg:mt-0 border-t lg:border-none lg:self-start lg:px-20 justify-between">
            {/* PRICE */}
            <div className="flex lg:flex-col lg:items-start justify-between items-center lg:border-t lg:mt-[20px] py-5">
              <h1 className="hidden lg:block text-[12px] font-bold w-full text-justify mb-4 lg:text-[16px]">
                {product.title}
              </h1>

              {/* PRICE */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1">
                  <p className="font-bold text-[14px]">₹ {product.price}</p>
                  <p className="line-through text-[#C6C3C3] text-[10px] lg:text-[14px]">
                    ₹ {product.mrp}
                  </p>
                  <p className="text-[#D50D3E] text-[10px] lg:text-[14px]">
                    {product.offer}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[#FFB800]">
                  <div className="flex gap-1">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <div>
                    <p className="text-[#C6C3C3] text-[10px] ">
                      {product.rating} 5 ratings
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* BUTTONS */}
            <div className="flex items-center text-[10px] font-bold gap-2">
              <Link to={`/product/${product.id}/cart`}>
                <button
                  onClick={() => addItemToCart(product)}
                  className="h-[30px] w-[70px] rounded-[15px] shadow-md border border-[#D50D3E]"
                >
                  Add to Cart
                </button>
              </Link>

              <Link to={"/ordered"}>
                <button className="h-[30px] w-[70px] rounded-[15px] bg-[#D50D3E] text-white shadow-md ">
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
