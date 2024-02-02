import Model3 from "../../models/home-model.png";
import ProductDetail from "../ProductDetail/ProductDetail";
import List from "../data/List";
import { Link } from "react-router-dom";

import { IoMdCart } from "react-icons/io";

import { IoArrowBackOutline } from "react-icons/io5";

import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";

const Product = () => {
  const { id } = useParams();
  const info = List.find((product) => product.id === parseInt(id));
  const cartLength = useSelector((state) => state.cart.length);

  if (!info) {
    return <p>Product not found</p>;
  }

  return (
    <div className=" min-w-[300px]">
      <div className="flex items-center w-full justify-between py-3 px-[25px] shadow-md relative">
        {/* BACK ICON */}
        <Link to={"/home"}>
          <IoArrowBackOutline className="text-[#D50D3E] h-[20px] w-[20px] mr-5 drop-shadow-lg" />
        </Link>

        <p className="text-[#D50D3E] font-bold text-[14px] text-center">
          Product Details
        </p>

        <div className="flex items-center gap-3 ">
          <span className="absolute bg-[#D50D3E] rounded-full w-[15px] h-[15px] lg:w-[20px] lg:h-[20px] lg:text-[12px] text-center text-[10px] text-white right-[3.7rem] lg:right-[3.7rem] top-2.5 lg:top-1">
            {cartLength}
          </span>
          <Link to={`/product/${info.id}/cart`}>
            <IoMdCart className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]" />
          </Link>
          <img
            src={Model3}
            alt="model"
            className="w-[30px] h-[30px] rounded-full"
          />
        </div>
      </div>

      {/* DETAILS */}

      <div className="p-[25px]">
        {/* {List.map((product, index) => ( */}
        <ProductDetail key={info} product={info} />
        {/* ))} */}
      </div>
    </div>
  );
};

export default Product;
