import React from "react";
import { MEDIA_URL } from "../../utils/constants";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item?.card?.info?.id}
            className="m-2 p-2 border-gray-300 border-b-2"
          >
            <div className="itemHeader flex justify-between w-auto">
              <div className="py-2">
                <span>{item?.card?.info?.name}</span>
                <span>
                  - ₹
                  {item?.card?.info.price
                    ? parseInt(item?.card?.info?.price / 100)
                    : parseInt(item?.card?.info?.defaultPrice / 100)}{" "}
                </span>
                <div>
                  <p className="text-xs">{item?.card?.info?.description}</p>
                </div>
              </div>
              <div className="flex w-auto">
                <img
                  src={`${MEDIA_URL}${item?.card?.info?.imageId}`}
                  className="w-40 rounded-xl h-auto"
                />
                <div className="absolute">
                  <button className="p-2 bg-black text-white shadow-lg mx-5 rounded-lg">
                    Add +
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
