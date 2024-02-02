import React, { useState } from "react";
import { Link } from "react-router-dom";

import Banner from "../../models/banner.webp";
import Model3 from "../../models/home-model.png";
import { FaSearch } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { BiMenu } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
// import List from "../data/List";
import { searchProduct } from "../../Redux/actions";
import ProductList from "../ProductList/ProductList";

const Home = () => {
  const [query, setQuery] = useState("");
  const cartLength = useSelector((state) => state.cart.length);
  const List = useSelector((state) => state.filteredProducts);
  const dispatch = useDispatch();

  const onSearchProduct = (query) => {
    setQuery(query);
    dispatch(searchProduct(query));
  };

  return (
    <div className="min-w-[375px] ">
      <div className="p-[25px] relative">
        <div className="flex relative gap-1  items-center">
          <img
            src={Model3}
            alt="model"
            className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] rounded-full"
          />

          {/* PROFILE */}

          <div className="w-full flex items-center justify-between">
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <p className="font-bold text-[10px] lg:text-[14px]">
                  Hello,Mary
                </p>
                <p className="top-[5px] text-[6px] lg:text-[8px] font-semibold text-[#D50D3E]">
                  Chicago, USA
                </p>
              </div>
              <div>
                <p className="font-extralight text-[10px] lg:text-[14px]">
                  Welcome to Skin Care
                </p>
              </div>
            </div>
            <div>
              {/* SEARCH */}
              <input
                type="text"
                value={query}
                onChange={(e) => onSearchProduct(e.target.value)}
                placeholder="Search your needs here"
                className="hidden lg:block lg:h-[30px] lg:w-[70rem] lg:rounded-[20px] lg:p-[20px] lg:bg-[#F1F1F1] lg:text-[12px] lg:text-black lg:font-thin lg:drop-shadow-md"
              />
            </div>
            <div className="flex items-center gap-2 lg:gap-3 ">
              <Link to="/cart">
                <IoMdCart className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]" />
              </Link>

              <span className="absolute bg-[#D50D3E] rounded-full w-[15px] h-[15px] lg:w-[20px] lg:h-[20px]  text-center text-[10px] lg:text-[12px] text-white right-5 lg:right-7 top-0">
                {cartLength}
              </span>

              <BiMenu className="w-[20px] h-[20px] lg:w-[25px] lg:h-[25px]" />
            </div>
          </div>
        </div>
        {/* SEARCH */}

        <input
          type="text"
          value={query}
          onChange={(e) => onSearchProduct(e.target.value)}
          placeholder="Search your needs here"
          className="lg:hidden h-[20px] lg:h-[30px] w-full rounded-[20px] p-[10px] lg:p-[20px] bg-[#F1F1F1] text-[8px] lg:text-[12px] text-black font-thin drop-shadow-md mt-[10px]"
        />
        {/* BANNER */}
        <img
          src={Banner}
          alt="banner"
          className="w-full my-[10px] drop-shadow-lg rounded-sm"
        />

        {/* PRODUCTS */}
        <p className="text-[10px] lg:text-[16px] font-bold pb-2">Trending</p>

        {/* PRODUCTS-LIST */}
        <div>
          {List.length === 0 ? (
            <p>Product Not Found</p>
          ) : (
            <div className="flex flex-col gap-5 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 lg:gap-10 lg:lg:place-items-center ">
              {List.map((product, index) => (
                <ProductList key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
      {/* FOOTER
      <div className="h-[10rem] w-full bg-orange-200"></div> */}
    </div>
  );
};

export default Home;
