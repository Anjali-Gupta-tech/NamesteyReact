import Shimmer from "./Shimmer.js";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurant.js";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  if (!resInfo?.cards[2]?.card?.card?.info) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, areaName, avgRating } =
    resInfo.cards[2].card.card.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);
  // if (resInfo==null) return <Shimmer />;
  //const{name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;
  /*<ul>
        {itemCards.map((item)=>
       ( <li>{item.card.info.name}</li>
      ))}
      </ul>*/

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(",")}</h3>
      <h4>{costForTwoMessage}</h4>
      <p>{areaName}</p>
      <h2>
        <b>{avgRating}🌟</b>
      </h2>
      <h1>Menu</h1>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -₹{item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
