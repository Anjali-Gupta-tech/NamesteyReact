import {useEffect} from "react";
const Home=()=>{
    useEffect(()=>{
const fetchdata=async()=>{
    try{
        const response= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await response.json();
        console.log(json);

    }
    catch(err) {}

};
fetchdata();

    },[]);
    return <div>Home</div>
};
export default Home;
