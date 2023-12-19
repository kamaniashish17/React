import React from "react"
import RestaurantCard from "../Card"
import resList from "../../utils/mockData"
import { useState } from "react"

export const bodyVariable = "ashisKamani"

const Body = () =>{

  const [listofRestaurant, setListOfRestaurant] = useState(resList)

const ClickHandler = () =>{
  const filteredList = listofRestaurant.filter((res)=> res.info.avgRating > 4.4)
  console.log("Button Clicked!!!!")
  setListOfRestaurant(filteredList)
}


    console.log(resList.length)
    return(
    <div className="body">
        <div className="search">
            Search
        </div>
        <div className="filter">
          <button className="filter-btn" onClick={ClickHandler}>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
            {listofRestaurant.map((restaurant) =>{
                return(
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                )
            })}
        </div>
    </div>
    )
}


export default Body