import React, { useEffect, useState } from "react";
import { IoMdStar, IoMdStarOutline, IoMdStarHalf } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { api } from "../config/baseURL";
import { FaCircle } from "react-icons/fa";

export const renderStar = (star) => {
  let stars = [];
  for (let i = 0; i < star; i++) {
    stars.push(<IoMdStar key={i} />);
  }
  return stars;
};

export const renderStarHalf = (starHalf) => {
  if (starHalf > 0) {
    return <IoMdStarHalf />;
  }
};

export const renderStarOutline = (starOutline) => {
  let stars = [];
  for (let i = 0; i < starOutline; i++) {
    stars.push(<IoMdStarOutline key={i} />);
  }
  return stars;
};

const Card = ({ name, rating, isOpen, level, pictureId, id }) => {
  const star = Math.floor(rating);
  const starHalf = rating - star;
  const starOutline = Math.floor(5 - rating);
  let navigate = useNavigate();

  const [info, setInfo] = useState([]);
  const getDetail = async () => {
    try {
      const res = await api
        .get(`detail/${id}`)
        .then((res) => setInfo(res.data?.restaurant?.categories));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetail();
  }, []);
  return (
    <div className="relative grid">
      <img
        src={`https://restaurant-api.dicoding.dev/images/large/${pictureId}`}
        alt="foto"
      />
      <p className="font-semibold">{name}</p>

      <div className="flex">
        {renderStar(star)}
        {renderStarHalf(starHalf)}
        {renderStarOutline(starOutline)}
      </div>
      <div className="flex gap-1">
        {info.map((item, i) => (
          <React.Fragment key={i}>
            <p>{item.name}</p>
            {i < info.length - 1 && <span>•</span>}
          </React.Fragment>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <p>{level}</p>
        <div className="flex items-center gap-x-1">
          <FaCircle
            className={`text-[8px] ${
              isOpen ? "text-[#39b928]" : "text-[#c92727]"
            }`}
          />
          <p className="text-[12px]">{isOpen ? "OPEN NOW" : "CLOSED"}</p>
        </div>
      </div>
      <button
        className="w-full bg-[#082c54] text-white place-self-end mt-3"
        onClick={() => navigate(`/detail/${id}`)}
      >
        Learn More
      </button>
    </div>
  );
};

export default Card;
