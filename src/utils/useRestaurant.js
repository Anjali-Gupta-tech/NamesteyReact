  import {useState,useEffect} from "react";
  import { Menu_API } from "../utils/constant.js";   
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    const data = await fetch(Menu_API+resId+"&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  }
  return resInfo;
} 
export default useRestaurantMenu;