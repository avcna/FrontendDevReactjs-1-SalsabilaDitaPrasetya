import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../config/baseURL";
import Review from "../components/Review";
import Menu from "../components/Menu";
import {
  renderStar,
  renderStarHalf,
  renderStarOutline,
} from "../components/Card";

const Detail = () => {
  const { id } = useParams();

  const [info, setInfo] = useState({});
  const [review, setReview] = useState([]);
  const getDetail = async () => {
    try {
      const res = await api.get(`detail/${id}`).then((res) => {
        setInfo(res.data.restaurant);

        console.log(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetail();
  }, []);
  return (
    <section className="grid grid-cols-2 h-[100vh]">
      <div className="overflow-hidden p-5">
        <img
          src={`https://restaurant-api.dicoding.dev/images/large/${info.pictureId}`}
          alt=""
          className="object-cover rounded-lg h-full"
        />
      </div>
      <div className="px-[20px] overflow-y-scroll text-justify p-5">
        <div className="flex justify-between items-center">
          <p className="font-bold text-[20px]">{info.name}</p>
          <div className="flex gap-2 items-center">
            <p>{info.rating}</p>
            <div className="flex items-center">
              {renderStar(Math.floor(info.rating))}
              {renderStarHalf(info.rating - Math.floor(info.rating))}
              {renderStarOutline(Math.floor(5 - info.rating))}
            </div>
          </div>
        </div>
        <p className="text-[#9d9d9e]">
          {info.address}, {info.city}
        </p>

        <p className="font-semibold text-[18px]">Summary</p>
        <p className="">{info.description}</p>

        <p className="font-semibold text-[18px]">Menu</p>
        <Menu menus={info?.menus} />

        <p className="font-semibold text-[18px]">Reviews</p>
        {info?.customerReviews.map((review, i) => {
          console.log(review);
          return <Review review={review} key={i} />;
        })}
      </div>
    </section>
  );
};

export default Detail;
