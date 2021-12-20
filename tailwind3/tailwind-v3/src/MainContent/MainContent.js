import "../MainContent/maincontent.scss";
import main from "../images/main_picture.jpg";
import arrow from "../images/arrow.png";
import { Link, animateScroll as scroll } from "react-scroll";

function MainContent() {
  return (
    <div className="">
      <img
        className="relative opacity-30 object-cover h-screen"
        src={main}
        alt=""
      />
      <div className="absolute text-white main-text left-1/2 text-6xl">
        Priceless elegance
      </div>
      <div>
        <Link to="content1" smooth={true} offset={-170}>
          <img
            className="absolute left-1/2 arrow h-12 p-2 rounded-full transition-all duration-300"
            src={arrow}
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}

export default MainContent;
