import React from "react";

const Menu = ({ menus }) => {
  return (
    <div className="grid grid-cols-2">
      <div className="bg-[#f4f4f4]">
        <p className="font-semibold">Makanan</p>
      </div>
      <div className="bg-[#f4f4f4]">
        <p className="font-semibold">Minuman</p>
      </div>
      <div>
        {menus?.foods.map((food, i) => (
          <p key={i}>{food?.name}</p>
        ))}
      </div>
      <div>
        {" "}
        {menus?.drinks.map((drink, i) => (
          <p key={i}>{drink?.name}</p>
        ))}
      </div>
    </div>
  );
};

export default Menu;
