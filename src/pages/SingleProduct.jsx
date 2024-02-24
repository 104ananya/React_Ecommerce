import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useProductContext } from "../context/productcontext";
import PageNavigation from "../components/PageNavigation";
import FormatPrice from "./../helper/FormatPrice";
import { FaCartShopping } from "react-icons/fa6";
import ImageSection from "../components/ImageSection";
import StarRatings from "../helper/StarRatings";
import AddToCart from "../components/AddToCart";

const APIurl = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();

  // console.log(singleProduct);

  const { id } = useParams();
  // console.log(id);

  const {
    // id: productId,
    name,
    company,
    price,
    description,
    category,
    reviews,
    stars,
    stock,
    image,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${APIurl}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-[75px]">
      <PageNavigation title={name} />

      <main className="grid grid-cols-2 gap-4 padding-x">
        {/* Images Section */}
        <ImageSection img = {image} />

        {/* Details Section */}
        <section>
          <div className="company uppercase text-coral-red font-bold text-sm sm:text-md tracking-wider  sm:pb-5">
            {company}
          </div>
          <div className="product capitalize text-zinc-800 font-bold text-2xl sm:text-4xl sm:leading-none pb-5">
            {name}
          </div>
          <div className="discount text-coral-red bg-[#ffe0dc] py-1 px-2 w-max rounded">
            {category}
          </div>
          <div className="flex pt-3"><StarRatings stars = {stars} reviews = {reviews}/></div>
          <div className="text-gray-500 lg:py-3 lg:leading-6">{description}</div>
          <div className="text-zinc-600 py-2">
            Available:
            <span className="font-bold">
              {stock > 0 ? " In Stock" : " Out of Stock"}
            </span>
          </div>
          <div className="amount font-bold flex items-center justify-between lg:flex-col lg:items-start mb-6">
            <div className="discount-price items-center flex text-zinc-800">
              <div className="price text-3xl">
                <FormatPrice price={price} />
              </div>
              <div className="discount text-coral-red bg-[#ffe0dc] w-max px-2 rounded mx-5 h-6">
                30%
              </div>
            </div>
            <del className="original-price text-grayish-blue line-through lg:mt-2">
              <FormatPrice price={price + 0.3 * price} />
            </del>
          </div>
          

          {/* Actions Section */}

          {stock > 0 && <AddToCart productData = {singleProduct}/>}
            

          <div className="sm:flex lg:mt-8 w-full">
            {/* <div className="quantity-container w-full bg-light-grayish-blue rounded-lg h-14 mb-4 flex items-center justify-between px-6 lg:px-3 font-bold sm:mr-3 lg:mr-5 lg:w-1/3">
              <button
                onClick={quantity}
                className="text-orange text-2xl leading-none font-bold mb-1 lg:mb-2 lg:text-3xl hover:opacity-60"
              >
                -
              </button>
              <input
                ref={productQuantityRef}
                min={0}
                max={100}
                onChange={quantity}
                className="quantity focus:outline-none text-dark-blue bg-light-grayish-blue font-bold flex text-center w-full"
                type="number"
                name="quantity"
                value={quantityCount}
                aria-label="quantity number"
              />
              <button
                onClick={quantity}
                className="text-orange text-2xl leading-none font-bold mb-1 lg:mb-2 lg:text-3xl hover:opacity-60"
              >
                +
              </button>
            </div> */}

            <button
              // onClick={addCart}
              className="cart w-full h-14 bg-coral-red rounded-lg lg:rounded-xl mb-2 shadow-orange-shadow shadow-2xl text-white flex items-center justify-center lg:w-3/5 hover:opacity-60"
            >
              <i className="cursor-pointer text-white text-xl leading-0 pr-3">
                <FaCartShopping />
              </i>
              Add to cart
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SingleProduct;
