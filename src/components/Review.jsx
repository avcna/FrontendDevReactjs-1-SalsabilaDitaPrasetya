import React from "react";
import { CgProfile } from "react-icons/cg";

const Review = ({ review }) => {
  return (
    <div className="bg-[#f4f4f4] rounded-md p-3 my-4 ">
      <div className="flex gap-x-4">
        <CgProfile className="text-[44px]" />
        <div>
          <p>{review?.name}</p>
          <p className="text-[13px]">{review?.date}</p>
          <p>{review?.review}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
