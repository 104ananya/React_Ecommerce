import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRatings = ({ stars, reviews }) => {
  const ratings = [];
  for (let i = 0; i < 5; i++) {
    if (stars >= i + 1) {
      ratings.push(<FaStar key={i} className="text-yellow-500" />);
    } else if (stars >= i + 0.5) {
      ratings.push(<FaStarHalfAlt key={i} className="text-yellow-500"/>);
    } else {
      ratings.push(<FaRegStar key={i} className="text-yellow-500" />);
    }
  }

  return (
    <>
      <div className="flex mr-2">{ratings}</div>
      <div>{reviews} reviews</div>
    </>
  );
};

export default StarRatings;
