import "../Navbar/navbar.scss";
import logo from "../images/kingsman_logo.png";
import name from "../images/logo.png";
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
  return (
    <nav>
      <div className="w-full p-3 bg-white flex justify-between z-10 absolute">
        <div className="flex items-center pl-5">
          <img className="w-14" src={logo} alt="" />
          <img className="h-10 ml-6 relative top-1" src={name} alt="" />
        </div>
        <div className="items-center flex navbar text-xl">
          <NavbarItem text={"Suits"} id={"content1"} offset={-100} />
          <NavbarItem text={"Location"} id={"location"} />
          <div className="flex pr-10">
            <img
              className="h-6 pr-4 pl-8"
              src="https://img.icons8.com/material-outlined/24/000000/search--v1.png"
            />
            <div className="text-base text-gray-600">Search</div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavbarItem({ text, id, offset }) {
  return (
    <Link to={id} smooth={true} offset={offset}>
      <div className="pl-5 pr-5">
        <a href="">{text}</a>
      </div>
    </Link>
  );
}

export default Navbar;
