import React, { useEffect, useState } from "react";
import ShimmerUI from "../Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const {resId} = useParams()
  //   const [resInfo, setResInfo] = useState(null);

    
  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(
  //     `https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
  //   );

  //   const json = await data.json();

  //   console.log(json.data);
  //   setResInfo(json.data);

  // };

  //Applying Custom Hooks

  const resInfo = useRestaurantMenu(resId)

  if(resInfo === null)
    return <ShimmerUI />

  const {name, cuisines, avgRating, costFroTwoMessage} = resInfo?.cards[0]?.card?.card?.info

  const {itemCards}  = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemCards)

  return (
    <div className="restaurant-menu">
      <h1>{name}</h1>
      <h2>{cuisines.join(', ')}</h2>
      <h3>{avgRating}</h3>
      <h4>{costFroTwoMessage}</h4>
      <h2>Menu</h2>
      <ul>
       {itemCards?.map((item)=>{
        return <li key={item?.card?.info?.id}>{item?.card?.info?.name} - Rs. {parseInt(item?.card?.info?.defaultPrice)/100 || parseInt(item?.card?.info?.price)/100}</li>
       })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
