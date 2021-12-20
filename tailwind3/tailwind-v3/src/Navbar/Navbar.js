import "../Navbar/navbar.scss";
import logo from "../images/kingsman_logo.png";
import name from "../images/logo.png";

function Navbar() {
  return (
    <nav>
      <div className="w-full p-3 bg-white flex justify-between absolute z-10">
        <div className="flex items-center pl-5">
          <img className="w-14" src={logo} alt="" />
          <img className="h-10 ml-6 relative top-1" src={name} alt="" />
        </div>
        <div className="items-center flex navbar text-xl">
          <NavbarItem text={"Suits"} />
          <NavbarItem text={"Location"} />
          <div className="flex pr-10">
            <img className="h-6 pr-4 pl-8" src="https://img.icons8.com/material-outlined/24/000000/search--v1.png" />
            <div className="text-base text-gray-600">Search</div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavbarItem({ text }) {
  return (
    <div className="pl-5 pr-5">
      <a href="">{text}</a>
    </div>
  );
}

export default Navbar;
