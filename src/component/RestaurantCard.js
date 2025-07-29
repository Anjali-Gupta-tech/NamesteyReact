import {CDN_URL} from "../utils/constant.js";
const RestaurantCard = (props) => {
  const { resdata } = props;
  const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,delivaryTime}=resdata?.info
  return (
    <div className="m-4 p-4 w-[200px] bg-gray-100 rounded-lg hover:bg-gray-300">
      <img
        className="rounded-lg w-[180px] h-[170px]"
        alt="res-logo"
        src={CDN_URL+cloudinaryImageId}
        />
      
      <h3 className="py-4 text-xl font-bold break-words ">{name}</h3>
      <h4 className="text-sm break-words">{cuisines.join(",")}</h4>
      <h5>{avgRating}stars <span className="text-[8px]">⭐</span></h5>
      <h5>{costForTwo}</h5>
      <h5>{delivaryTime}</h5>
     
     
    </div>
  );
};
export default RestaurantCard;