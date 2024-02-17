import React, { useState } from "react";

const Header = ({ categorySelected, priceSelected, refresh, openChecked }) => {
  const [val, setVal] = useState({ open: false, price: "", categories: "" });
  return (
    <section className="w-full border-b border-t border-[#d4d3d3] py-4 px-[32px] flex justify-between sm:flex-col xsm:flex-col">
      <div className="flex gap-x-6 items-center xsm:grid xsm:grid-rows-4 sm:grid sm:grid-rows-4">
        <p>Filter by:</p>
        <div className="flex items-center gap-x-2 xsm:flex-row-reverse xsm:justify-end  sm:flex-row-reverse sm:justify-end">
          <input
            type="checkbox"
            onChange={(e) => {
              setVal((prevState) => ({ ...prevState, open: e.target.checked }));
              openChecked(e);
            }}
            checked={val.open}
          />
          <label htmlFor="">Open Now</label>
        </div>
        <div className="flex items-center">
          <label htmlFor="car">Price</label>
          <select
            name="car"
            id="car"
            className="w-[54px]"
            onChange={(e) => {
              setVal((prevState) => ({ ...prevState, price: e.target.value }));
              priceSelected(e);
            }}
            value={val.price}
          >
            <option value="" disabled hidden></option>
            <option value="$">$</option>
            <option value="$$">$$</option>
            <option value="$$$">$$$</option>
            <option value="$$$$">$$$$</option>
          </select>
        </div>
        <div className="flex items-center">
          <label htmlFor="cars">Categories</label>
          <select
            name="cars"
            id="cars"
            className="w-[84px]"
            onChange={(e) => {
              categorySelected(e);
              setVal((prevState) => ({
                ...prevState,
                categories: e.target.value,
              }));
            }}
            value={val.categories}
          >
            <option value="" disabled hidden></option>
            <option value="Italia">Italia</option>
            <option value="Modern">Modern</option>
            <option value="Jawa">Jawa</option>
            <option value="Bali">Bali</option>
            <option value="Spanyol">Spanyol</option>
            <option value="Sop">Sop</option>
            <option value="Sunda">Sunda</option>
          </select>
        </div>
      </div>
      <button
        className="text-[12px] bg-[#082c54] text-white px-[12px] py-[8px] rounded-md"
        onClick={() => {
          setVal({ open: false, price: "", categories: "" });
          refresh();
        }}
      >
        CLEAR ALL
      </button>
    </section>
  );
};

export default Header;
