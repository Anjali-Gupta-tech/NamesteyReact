import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  //<h1 className="bold">Hello tailwind</h1>

  const onlineStatus=useOnlineStatus();
  return (
 
    <div className="flex justify-between bg-orange-200 shadow-l">
      <div className="w-25">
        <img className="w-25" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex m-5 space-x-7  ">
          <li>online Status:{onlineStatus?"✅":"🔴"}</li>
          <li className=" hover:bg-orange-300"> 
            <Link to="/">Home</Link></li>
          <li  className=" hover:bg-orange-300">
            <Link to="/about">About</Link>
          </li>
          <li  className=" hover:bg-orange-300">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className=" hover:bg-orange-300">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li  className=" hover:bg-orange-300 ">
            <Link to="/cart"></Link>Cart
          </li>
        </ul>
    
      </div>
    </div>
  );
};
export default Header;
