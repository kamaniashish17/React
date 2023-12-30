import React, { useState, useContext } from "react";
import ItemList from "../ItemList";

const RestaurantCategory = ({ data }) => {

    const [showItems, setShowItems] = useState(false)

    const handleClick = () =>{
        setShowItems(!showItems)
    }


  console.log("Restaurant Category", data.itemCards);
  return (
    <div>
      {/* Header */}
      <div className="categoryHeader w-full bg-gray-50 shadow-lg p-4 mx-auto my-4">
        <div className="categoryHeaderWrapper flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="categoryTitle font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
         {!showItems ? <span className="downArrow">⬇</span> :<span className="upArrow">⬆</span> } 
        </div>
        <div>
          {showItems && <ItemList items = {data?.itemCards}/> }
        </div>
      </div>

      {/** Body of the category */}
    </div>
  );
};

export default RestaurantCategory;
