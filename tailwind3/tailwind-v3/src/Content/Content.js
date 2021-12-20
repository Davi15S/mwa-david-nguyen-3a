import "../Content/content.scss";
import bond from "../images/bond.jpg";
import taron from "../images/taron.jpg";
import kingsman from "../images/kingsman.jpg";

function Content() {
  return (
    <div>
      <div className="w-full flex justify-center pb-[300px]">
        <div className="text-white mt-[200px] w-2/3">
          <div
            className="grid w-full grid-cols-2 gap-x-28 justify-items-center mb-[300px]"
            id="content1"
          >
            <div className="relative mt-28">
              <div className="con-text text-4xl mb-10">
                SUITS THAT CELEBRITY LOVE
              </div>
              <div className="con-text text-2xl">
                Our suits are made from the finest material that famous people
                absolutely love. We are the biggest company that provides suits
                for movies.
              </div>
              <div className="mt-20 con-text text-2xl bg-white text-black w-56">
                <a
                  className="w-full flex justify-center pb-3 pt-3 hover:bg-gray-800 hover:text-white transition-all duration-300"
                  href=""
                >
                  EXPLORE MORE
                </a>
              </div>
            </div>
            <img className="w-[500px]" src={bond} alt="" />
          </div>
          <div className="grid w-full grid-cols-2 gap-x-28 justify-items-center">
            <img className="w-[500px]" src={taron} alt="" />
            <div className="relative mt-28">
              <div className="con-text text-4xl mb-10">OUR OWN MOVIE</div>
              <div className="con-text text-2xl">
                Our prestige and luxurious brand was so popular that it was made
                into world known movies with a movie star Taron Egerton.
              </div>
              <div className="mt-20 con-text text-2xl bg-white text-black w-56">
                <a
                  className="w-full flex justify-center pb-3 pt-3 hover:bg-gray-800 hover:text-white transition-all duration-300"
                  href=""
                >
                  WATCH TRAILER
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[600px] mb-[100px]" id="location">
        <img
          className="h-full w-full object-cover relative opacity-20"
          src={kingsman}
          alt=""
        />
        <div className="con-text text-white flex-col relative top-[-400px]">
          <div className="flex justify-center text-5xl">YOU CAN FIND US ON:</div>
          <div className="flex justify-center mt-16 text-3xl">11 Savile Row, Mayfair</div>
        </div>
      </div>
    </div>
  );
}

export default Content;
