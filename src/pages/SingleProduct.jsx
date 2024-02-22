import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useProductContext } from "../context/productcontext";

const APIurl = "https://api.pujakaitem.com/api/products?id=thapaserialnoa";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();

  // console.log(singleProduct);

  const { id } = useParams();
  // console.log(id);

  const {
    id: productId,
    name,
    company,
    price,
    description,
    category,
    reviews,
    stars,
    stocks,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(APIurl);
  }, []);

  return <div className="mt-[75px]">SingleProduct</div>;
};

export default SingleProduct;
