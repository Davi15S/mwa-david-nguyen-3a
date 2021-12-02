import "../MainPage/mainPage.css";
import img from "../images/csmoney.jpg";
import logo from "../images/csmoney-logo.png";

function MainPage() {
  return (
    <div className="bg-costum h-auto" id="top">
      <div className="relative flex flex-col z-20 pt-60 pb-28">
        <p className="text-6xl font-bold text-white text-center">
          Trade the greatest skins
        </p>
        <p className=" text-base py-14 text-center font-medium text-col">
          Buy, sell, and trade skins easier and faster. All deals are secured
          with the highest level protection methods.
        </p>
        <a
          className="text-white bg-purple-500 px-16 py-4 self-center text-lg rounded-md font-semibold hover:bg-purple-400 transition-colors duration-500"
          href="https://cs.money/"
          target="_blank"
        >
          TRY IT NOW
        </a>
        <img
          className="self-center my-40 w-2/3 rounded-2xl shadow-2xl"
          src={img}
          alt=""
        />

        <p
          className="text-white text-3xl font-medium text-center"
          id="section1"
        >
          Meet the features of site
        </p>

        <div className="self-center w-2/3 grid grid-cols-4 m-24 relative gap-x-24">
          <Function title="40%" txt="bunos for top up balance" />
          <Function title="80 K" txt="CS:GO and Dota2 items on our website" />
          <Function title="30 sec" txt="from logging in to making a purchase" />
          <Function
            title="24/7"
            txt="online support, response time less than 5 minutes"
          />
        </div>

        <div className="relative w-2/3 self-center mt-40 grid grid-cols-2" id="section2">
          <iframe
            className="rounded-2xl shadow-2xl"
            width="100%"
            height="480"
            src="https://www.youtube.com/embed/WrHHrQNFLns"
            allowfullscreen="allowfullscreen"
          ></iframe>
          <div className="pl-32">
            <div className="pb-10">
              <Function
                title="Operation Riptide Collection"
                txt="Newest collections always on CS.MONEY"
              />
            </div>
            <div className="pb-10">
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

        <div className="grid grid-cols-2 w-2/3 self-center relative gap-x-48">
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
    <div className="text-white font-medium">
      <div className="flex items-center feature">
        <img className="w-16 rounded-lg" src={logo} alt="" />
        <p className="text-2xl p-6 font-semibold">{title}</p>
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
