import {CDN_URL} from "./constant.js";
const RestaurantCard = (props) => {
  const { resdata } = props;
  const {cloudinaryImageId,name,cuisines,avgRating,costForTwo}=resdata?.info
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL+cloudinaryImageId}
        />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h5>{avgRating}stars</h5>
      <h5>{costForTwo}</h5>
     
    </div>
  );
};
export default RestaurantCard;