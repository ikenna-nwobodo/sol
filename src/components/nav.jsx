import Logo from "./logo";
import "./nav.css";
import Button from "./button";

const Nav = () => {
  return (
    <div className="nav">
      <Logo />
      <div className="right">
        <div className="notif">
          <span class="material-symbols-rounded">notifications</span>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default Nav;
