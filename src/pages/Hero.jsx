import React from "react";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import { api } from "../config/baseURL";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { price } from "../config/price";
import { isOpen } from "../config/open";
const Hero = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [filteredResult, setFilteredResult] = useState([]);

  const getAllRestaurants = async () => {
    try {
      const response = await api.get("/list").then((response) => {
        setRestaurant(response.data.restaurants);
        setFilteredResult(response.data.restaurants);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllRestaurants();
  }, []);

  const categorySelected = async (q) => {
    try {
      const response = await api.get(`search?q=${q}`).then((response) => {
        setRestaurant(response.data.restaurants);
        setFilteredResult(response.data.restaurants);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const priceSelected = (price) => {
    if (price === "$") {
      let res = filteredResult.filter(
        (item) => parseInt(item.pictureId) % 4 === 0
      );
      setFilteredResult(res);
    } else if (price === "$$") {
      let res = filteredResult.filter(
        (item) =>
          parseInt(item.pictureId) % 3 === 0 &&
          parseInt(item.pictureId) % 2 !== 0
      );
      setFilteredResult(res);
    } else if (price === "$$$") {
      let res = filteredResult.filter(
        (item) =>
          parseInt(item.pictureId) % 2 === 0 &&
          parseInt(item.pictureId) % 3 !== 0 &&
          parseInt(item.pictureId) % 4 !== 0
      );
      setFilteredResult(res);
    } else {
      let res = filteredResult.filter(
        (item) =>
          parseInt(item.pictureId) % 2 !== 0 &&
          parseInt(item.pictureId) % 3 !== 0
      );
      setFilteredResult(res);
    }
  };

  const openChecked = (o) => {
    if (o === true) {
      let res = filteredResult.filter((item) =>
        isOpen(parseInt(item.pictureId))
      );
      setFilteredResult(res);
    } else {
      getAllRestaurants();
    }
  };

  return (
    <>
      <Navbar />
      <Header
        categorySelected={(e) => categorySelected(e.target.value)}
        priceSelected={(e) => priceSelected(e.target.value)}
        refresh={getAllRestaurants}
        openChecked={(e) => openChecked(e.target.checked)}
      />
      <section className="p-[32px] grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xsm:grid-cols-1 gap-8">
        {filteredResult.map((item, index) => {
          let harga = price(item.pictureId);
          let open = isOpen(parseInt(item.pictureId));
          return (
            <Card
              key={index}
              id={item.id}
              name={item.name}
              rating={item.rating}
              isOpen={open}
              level={harga}
              pictureId={item.pictureId}
            />
          );
        })}
      </section>
    </>
  );
};

export default Hero;
