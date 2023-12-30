import React, { useContext } from "react";
import {MEDIA_URL} from "../../utils/constants"
import UserContext from "../../utils/UserContext";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
    const {resData} = props
    const {cloudinaryImageId, name, cuisines, costForTwo, avgRating, id} = resData?.info
    const {deliveryTime} = resData?.info?.sla

    const {loggedInUser} = useContext(UserContext)
  return (
    <div className="res-card p-4 m-4 w-64 rounded-lg" style={styleCard}>
      <img
        className="res-logo rounded-lg"
        alt="res-logo"
        src={`${MEDIA_URL}${cloudinaryImageId}`}
      />
      <h3 className="restaurant-menu font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{costForTwo}</h4>
      <h4>{`${avgRating} stars`}</h4>
      <h4>{`${deliveryTime} minutes`}</h4>
      {/**Using Context to get the data without Drilling the props */}
      <h4>{loggedInUser}</h4>
    </div>
  );
};


/**
 * Higher Order Component act as a pure function which takes component as an input -> enhance it -> and returns back the \
 * enhanced component as an O/p but it doesnt modify the behaviour of the component.
 * 
 * 
 * 
 */

export const withMostPopularLabel = (RestaurantCard) =>{
  return (props)=>{
    return(
      <div>
        <label className="popular absolute  bg-orange-400  p-1 rounded-lg">Most Popular</label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}
export default RestaurantCard;
