import { LOGO_URL } from "./constant";
const Header = () => {
  return (
    <div className="Header">
      <div className="logoContainer">
        <img
          className="logo"
          src={LOGO_URL}
        />;
      </div>
      <div className="nav">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
