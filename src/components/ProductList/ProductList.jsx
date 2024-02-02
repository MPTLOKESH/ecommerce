import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ product }) => {
  return (
    <div className="border rounded-md p-3 lg:w-[90%] lg:h-[420px]">
      <Link to={`/product/${product.id}`}>
        <div className="flex-col justify-center gap-3 lg:gap-7 sm:place-items-center lg:flex-row lg:place-items-start">
          <img
            src={product.images[0]}
            alt=""
            className="w-full pb-2 drop-shadow-lg rounded-md "
          />
          <div>
            <p className=" text-[12px] lg:text-[16px] font-semibold">
              {product.title}
            </p>
            <div className="flex items-center gap-1">
              <p className="font-bold text-[12px] lg:text-[16px]">
                ₹ {product.price}
              </p>
              <p className="line-through text-[#C6C3C3] text-[8px] lg:text-[12px]">
                ₹ {product.mrp}
              </p>
              <p className="text-[#D50D3E] text-[8px] lg:text-[12px]">
                {product.offer}
              </p>
            </div>

            <p className="font-light text-[7px] lg:text-[12px] text-justify">
              {product.description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductList;
