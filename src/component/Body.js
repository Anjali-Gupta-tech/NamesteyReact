import RestaurantCard from "./RestaurantCard.js";
import {useEffect,useState } from "react";
import resList from "./mockdata.js";
import Shimmer from "./Shimmer.js";

const Body = () => {
  const [ListOfRestaurants, setListOfRestaurant] = useState([]);
    useEffect(() => {
    fetchData();
  }, []);


/*
    const fetchData=async()=>{
      const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json=await data.json();
      console.log(json);
      setListOfRestaurant(json?.data?.cards[8]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
   
  
   
*/
const fetchData = async () => {
  console.log("📡 fetchData called");

  try {
    const response = await fetch("https://swiggy-api-4c740.web.app/swiggy-api.json");

    console.log("🔁 Response status:", response.status);

    if (!response.ok) {
      throw new Error("HTTP error: " + response.status);
    }

    const json = await response.json();
    console.log("✅ JSON received:", json);

    const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    console.log("🍽️ Restaurants:", restaurants);

  setListOfRestaurant(restaurants || []);
  } catch (error) {
    console.error("❌ Fetch failed:", error.message);
  }
};

if(ListOfRestaurants.length==0){
  return <Shimmer/>
}
     
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = ListOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurant(filterList);
          }}
        >
          Top Rated Restorant
        </button>
      </div>

      <div className="seachbar">Search</div>
      <div className="res-container">
        {ListOfRestaurants?.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resdata={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
