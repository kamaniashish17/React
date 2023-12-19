import React from "react";
import {MEDIA_URL} from "../../utils/constants"

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
    const {resData} = props
    const {cloudinaryImageId, name, cuisines, costForTwo, avgRating, id} = resData?.info
    const {deliveryTime} = resData?.info?.sla
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src={`${MEDIA_URL}${cloudinaryImageId}`}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{costForTwo}</h4>
      <h4>{`${avgRating} stars`}</h4>
      <h4>{`${deliveryTime} minutes`}</h4>

    </div>
  );
};

export default RestaurantCard;
