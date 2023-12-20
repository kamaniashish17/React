import React from "react"
import RestaurantCard from "../Card"
import resList from "../../utils/mockData"
import { useState, useEffect } from "react"
import ShimmerUI  from "../Shimmer"
import { Link } from "react-router-dom"

export const bodyVariable = "ashisKamani"

const Body = () =>{

  const [listofRestaurant, setListOfRestaurant] = useState([])
  const [searchText, setSearchText] = useState("")
  const [filteredRestaurant, setFilteredRestaurant] = useState([])

  useEffect(()=>{
    console.log("Called After the body is rendered")
    fetchData()
  }, [])

  const fetchData = async() =>{
    const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")

    const json = await data.json()

    console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    setListOfRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

const handleSearch = () =>{
  console.log(searchText)

  const filteredRestaurant = listofRestaurant.filter((res)=>{
    return res.info.name.toLowerCase().includes(searchText.toLowerCase())
  })
  console.log("filteredRestaurant", filteredRestaurant)
  setFilteredRestaurant(filteredRestaurant)
  
} 

const ClickHandler = () =>{
  const filteredList = listofRestaurant.filter((res)=> res.info.avgRating > 4.4)
  console.log("Button Clicked!!!!")
  setListOfRestaurant(filteredList)
  setFilteredRestaurant(filteredList)
}

  //Conditional Rendering
  if(listofRestaurant.length === 0){
    return <ShimmerUI />
  }


    console.log(resList.length)
    return(
    <div className="body">
        <div className="filter">
        <div className="search">
            <input type="text" className="search-Box" value={searchText} onChange={(e)=>{
              setSearchText(e.target.value)
            }}/>
            <button className="searchButton" onClick={handleSearch}>Search</button>
        </div>
          <button className="filter-btn" onClick={ClickHandler}>Top Rated Restaurants</button>
        </div>
        {listofRestaurant && 
        <div className="res-container">
            {filteredRestaurant.map((restaurant) =>{
                return(

                  <Link key={restaurant.info.id} to={`/restaurants/${restaurant.info.id}`}>  <RestaurantCard  resData={restaurant} /> </Link>
                )
            })}
        </div>
        }
    </div>
    )
}


export default Body