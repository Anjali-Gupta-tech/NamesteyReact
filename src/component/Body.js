import RestaurantCard from "./RestaurantCard.js";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurant, setFilterRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  // whenever state varibable [local variable]changes, our body component reconcilision(or rerender component)
  //  reconsilision process =>[Load =>Render =>APi calls=>Re-render]
  console.log("Body render");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    console.log("📡 fetchData called");
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139&lng=77.2090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      if (!response.ok) {
        throw new Error("HTTP error: " + response.status);
      }

      const json = await response.json();
      console.log("✅ JSON received:", json);

      // Updated logic: find first card with gridElements (restaurant list)
      const restaurantList = json?.data?.cards?.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      console.log("🍽️ Restaurants Found:", restaurantList?.length);

      setAllRestaurants(restaurantList || []);
      setFilterRestaurant(restaurantList || []);
    } catch (error) {
      console.error("❌ Fetch failed:", error.message);
    }
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>Opps! Looking like you are offline</h1>;
  }
  if (allRestaurants.length == 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
          <div className="flex space-x-7 ml-2 mt-1.5 mb-1.5 ">
      <div className="space-x-2">
        <input
          type="text"
          className=" border border-black border-solid rounded-lg"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        
        />
        <button
        className="bold border bg-gray-400 rounded-lg"
          onClick={() => {
            console.log(searchText);
            const filteredRestaurant = allRestaurants.filter((res) => {
              return res.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            setFilterRestaurant(filteredRestaurant);
          }}
        >
          Search
        </button>
      </div>
      <div className="filter ">
        <button
          className="filter-btn border border-black border-solid w-[200px] rounded-lg bg-gray-400"
          onClick={() => {
            const filterList = allRestaurants.filter(
              (res) => res.info.avgRating > 4
          );
            setFilterRestaurant(filterList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      </div>

      <div className="flex flex-wrap items-stretch">
        {filteredRestaurant?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <RestaurantCard resdata={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
