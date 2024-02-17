import React from "react";
import { CgProfile } from "react-icons/cg";
import { renderStar, renderStarOutline } from "./Card";

const Review = ({ review, rating }) => {
  return (
    <div className="bg-[#f4f4f4] rounded-md p-3 my-4 ">
      <div className="flex gap-x-4">
        <CgProfile className="text-[44px]" />
        <div>
          <div className="flex gap-x-4">
            <p>{review?.name}</p>
            <div className="flex">
              {renderStar(Math.floor(rating))}
              {renderStarOutline(5 - Math.floor(rating))}
            </div>
          </div>
          <p className="text-[13px]">{review?.date}</p>
          <p>{review?.review}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
