import React from "react";
import RestaurantCard, { withMostPopularLabel } from "../Card";
import resList from "../../utils/mockData";
import { useState, useEffect } from "react";
import ShimmerUI from "../Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
export const bodyVariable = "ashisKamani";

const Body = () => {
  const [listofRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const onlineStatus = useOnlineStatus();

  const RestaurnatCardWithMostPopularLabel = withMostPopularLabel(
    RestaurantCard
  );

  useEffect(() => {
    console.log("Called After the body is rendered");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log("JSON", json);

    console.log(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const handleSearch = () => {
    console.log(searchText);

    const filteredRestaurant = listofRestaurant.filter((res) => {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    console.log("filteredRestaurant", filteredRestaurant);
    setFilteredRestaurant(filteredRestaurant);
  };

  const ClickHandler = () => {
    const filteredList = listofRestaurant.filter(
      (res) => res.info.avgRating > 4.4
    );
    console.log("Button Clicked!!!!");
    setListOfRestaurant(filteredList);
    setFilteredRestaurant(filteredList);
  };
  if (onlineStatus === false) {
    return (
      <h1>
        It seems you are Offline! Please check you network connection and try
        again
      </h1>
    );
  }

  //Conditional Rendering
  if (listofRestaurant.length === 0) {
    return <ShimmerUI />;
  }

  console.log(resList.length);
  return (
    <div className="body">
      <div className="filter flex items-center">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="search-Box border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="searchButton px-4 py-1 m-4 bg-orange-400 rounded-lg text-white"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="filterRestaurant m-4 p-4">
          <button
            className="filter-btn px-2 py-2 bg-gray-200 rounded-lg"
            onClick={ClickHandler}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      {listofRestaurant && (
        <div className="res-container flex flex-wrap">
          {filteredRestaurant.map((restaurant) => {
            return (
              <Link
                key={restaurant.info.id}
                to={`/restaurants/${restaurant.info.id}`}
              >
                {" "}
                {/* Here we are returning the Restaurant Cards with most popular label if there are any(enhanced version) */}
                {restaurant.info.totalRatingsString === "5K+" ? (
                  <RestaurnatCardWithMostPopularLabel resData={restaurant} />
                ) : (
                  <RestaurantCard resData={restaurant} />
                )}{" "}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Body;
