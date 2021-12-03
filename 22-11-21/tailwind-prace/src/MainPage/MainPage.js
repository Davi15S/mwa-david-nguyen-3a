import "../MainPage/mainPage.css";
import img from "../images/csmoney.jpg";
import logo from "../images/csmoney-logo.png";

function MainPage() {
  return (
    <div className="bg-costum h-auto" id="top">
      <div className="relative flex flex-col z-20 pt-60 pb-28">
        <div className="w-10/12 flex flex-col self-center justify-center">
          <p className="text-6xl font-bold text-white text-center">
            Trade the greatest skins
          </p>
          <p className=" text-base py-14 text-center font-medium text-col">
            Buy, sell, and trade skins easier and faster. All deals are secured
            with the highest level protection methods.
          </p>
          <a
            className="text-white bg-purple-500 px-16 py-4 m-auto text-lg rounded-md font-semibold hover:bg-purple-400 transition-colors duration-500"
            href="https://cs.money/"
            target="_blank"
          >
            TRY IT NOW
          </a>
        </div>
        <img
          className="self-center my-40 w-10/12 rounded-2xl shadow-2xl xl:w-2/3"
          src={img}
          alt=""
        />

        <p
          className="text-white text-3xl font-medium text-center"
          id="section1"
        >
          Meet the features of site
        </p>

        <div className="self-center w-2/3 grid grid-cols-1 my-24 relative md:grid-cols-2 md:gap-x-44 2xl:grid-cols-4 2xl:gap-x-32">
          <Function title="40%" txt="bunos for top up balance" />
          <Function title="80 K" txt="CS:GO and Dota2 items on our website" />
          <Function title="30 sec" txt="from logging in to making a purchase" />
          <Function
            title="24/7"
            txt="online support, response time less than 5 minutes"
          />
        </div>

        <div
          className="relative w-full self-center grid grid-cols-1 sm:w-2/3 2xl:grid-cols-8 2xl:gap-x-28"
          id="section2"
        >
          <iframe
            className="rounded-2xl shadow-2xl w-10/12 justify-self-center h-60 sm:w-full sm:h-480px 2xl:col-span-5"
            src="https://www.youtube.com/embed/WrHHrQNFLns"
            allowFullScreen="allowfullscreen"
          ></iframe>
          <div className="w-2/3 justify-self-center mt-32 sm:w-full md:grid md:grid-cols-2 md:gap-x-44 2xl:grid-cols-1 2xl:mt-0 2xl:col-span-3">
            <div className="">
              <Function
                title="Operation Riptide"
                txt="Newest collections always on CS.MONEY"
              />
            </div>
            <div className="">
              <Function
                title="Security"
                txt="Trusted by the biggest esports brands"
              />
              <List
                txt={
                  <a
                    className="hover:text-purple-500 transition-colors duration-500"
                    href="https://ecs.faceit.com/"
                    target="_blank"
                  >
                    ECS
                  </a>
                }
                p={
                  <a
                    className="hover:text-purple-500 transition-colors duration-500"
                    href="https://blastpremier.com/"
                    target="_blank"
                  >
                    BlastProSeries
                  </a>
                }
                li={
                  <li>
                    <a
                      className="hover:text-purple-500 transition-colors duration-500"
                      href="https://starladder.com/en"
                      target="_blank"
                    >
                      Starladder
                    </a>
                  </li>
                }
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 w-2/3 self-center relative gap-x-48 xl:grid-cols-2">
          <div>
            <Function
              title="Store"
              txt="Our Store mode makes the items buying process easier and faster. Take advantage of:"
            />
            <List
              txt="Items with a 28.6% discount"
              p="Ability to buy without Steam Guard and with any Steam level"
            />
          </div>
          <div>
            <Function
              title="Trade"
              txt="Improved trade interface. Now faster and more user-friendly: "
            />
            <List
              txt="Upgraded search filters"
              p="More detailed skin cards"
              li={<li>Cart interface added</li>}
            />
          </div>
          <div>
            <Function
              title="Personal account"
              txt="Improved and reworked structure of personal accounts now includes:"
            />
            <List
              txt="Separate security section and high-level account protection"
              p="Notification mode and communication channel"
              li={<li>Detailed view of all transactions</li>}
            />
          </div>
          <div>
            <Function
              title="Prime subscription"
              txt="Activate the Prime subscription to get more useful features and benefits:"
            />
            <List
              txt="Special conditions in other products of CS.MONEY"
              p="Increased deposit bonus and special discounts in the Store"
              li={<li>Reduced commission</li>}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Function({ title, txt }) {
  return (
    <div className="text-white font-medium my-4">
      <div className="flex feature items-center">
        <img className="w-16 rounded-lg" src={logo} alt="" />
        <p className="p-6 font-semibold whitespace-nowrap text-xl xl:text-2xl">{title}</p>
      </div>
      <p className="py-12 text-col">{txt}</p>
    </div>
  );
}

function List({ txt, p, li }) {
  return (
    <ul className="list-disc pb-28 font-medium text-col list-outside">
      <div className="pl-5">
        <li>{txt}</li>
        <li>{p}</li>
        {li}
      </div>
    </ul>
  );
}

export default MainPage;
