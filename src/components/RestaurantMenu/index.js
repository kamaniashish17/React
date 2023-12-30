import React, { useEffect, useState } from "react";
import ShimmerUI from "../Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "../MenuCategory";

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

  console.log("ResInfo", resInfo?.cards[0]?.card?.card?.info)

  console.log("All Categories", resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

  const itemCategories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>{
    return c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  })

  console.log("Categories", itemCategories)

  if(resInfo === null)
    return <ShimmerUI />

  const {name, cuisines, avgRating, costFroTwoMessage, totalRatingsString
  } = resInfo?.cards[0]?.card?.card?.info

  const {itemCards}  = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemCards)

  return (
    <div className="restaurant-menu max-w-3xl my-20 mx-auto">
      <div className="restaurantMenuHeader mx-4">
        <div className="restaurantMenuHeaderWrapper pt-4 mb-4">
            <div className="restaurantMenuNameHeader inline-block">
            <h1 className="restaurantName font-bold text-lg">{name}</h1>
            <span className="pt-3 font-light text-sm">{cuisines.join(', ')}</span>
            </div>
            <div className="restaurantRatingWrapper float-right">
              <button className="restaurantRatings">
                  <span className="restaurantAvgRating">{avgRating}</span>
                  <span className="restaurantTotalRatings">{totalRatingsString}</span>
              </button>
            </div>
        </div>
      </div>
      <div className="restaurantMenuCategory mt-16">
        {itemCategories.map((category)=>{
          return (<RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card} />)
        })}
      </div>

      {/* <h2>{cuisines.join(', ')}</h2>
      <h3>{avgRating}</h3>
      <h4>{costFroTwoMessage}</h4>
      <h2>Menu</h2>
      <ul>
       {itemCards?.map((item)=>{
        return <li key={item?.card?.info?.id}>{item?.card?.info?.name} - Rs. {parseInt(item?.card?.info?.defaultPrice)/100 || parseInt(item?.card?.info?.price)/100}</li>
       })}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
