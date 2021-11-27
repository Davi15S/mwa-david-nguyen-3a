import "../MainPage/mainPage.css";
import img from "../images/csmoney.jpg";
import logo from "../images/csmoney-logo.png";

function MainPage() {
  return (
    <div className="costum">
      <div className="relative flex flex-col z-20 top-60">
        <p className="text-6xl font-bold text-white text-center">
          Trade the greatest skins
        </p>
        <p className="text-white text-base py-14 text-center">
          CS.MONEY helps flexibly work with your inventory on Steam from trade
          to sale
        </p>
        <a
          className="text-white bg-purple-500 px-16 py-4 self-center text-lg rounded-md font-semibold"
          href=""
        >
          TRY IT NOW
        </a>
        <img className="self-center my-40 w-2/3 rounded-2xl" src={img} alt="" />

        <p className="text-white text-3xl font-medium text-center">
          Meet the feature of product
        </p>

        <div className="self-center w-2/3 grid grid-cols-4 top-24 relative gap-x-24">
          <Function title="40%" txt="bunos for tup up balance" />
          <Function title="80 K" txt="CS:GO and Dota2 items on our website" />
          <Function title="30 sec" txt="from logging in to making a purchase" />
          <Function
            title="24/7"
            txt="online support, response time less than 5 minutes"
          />
        </div>

        <div className="relative w-2/3 self-center top-80 flex">
          <iframe
            className="rounded-2xl"
            width="854"
            height="480"
            src="https://www.youtube.com/embed/WrHHrQNFLns"
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
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 w-2/3 self-center relative top-96 gap-x-48 mt-20">
          <div>
            <Function
              title="Store"
              txt="Our Store mode makes the items buying process easier and faster. Take advantage of:"
            />
            <ul className="costum-marker text-white h-52">
              <li>Items with a 28.6% discount</li>
              <li>
                Ability to buy without Steam Guard and with any Steam level
              </li>
            </ul>
          </div>
          <div>
            <Function
              title="Trade"
              txt="Improved trade interface. Now faster and more user-friendly:"
            />
            <ul className="costum-marker text-white h-52">
              <li>Upgraded search filters</li>
              <li>More detailed skin cards</li>
              <li>Cart interface added</li>
            </ul>
          </div>
          <div>
            <Function
              title="Personal account"
              txt="Improved and reworked structure of personal accounts now includes:"
            />
            <ul className="costum-marker text-white pb-16">
              <li>
                Separate security section and high-level account protection
              </li>
              <li>Notification mode and communication channel</li>
              <li>Detailed view of all transactions</li>
            </ul>
          </div>
          <div>
            <Function
              title="Prime subscription"
              txt="Activate the Prime subscription to get more useful features and benefits:"
            />
            <ul className="costum-marker text-white pb-16">
              <li>Special conditions in other products of CS.MONEY</li>
              <li>
                Increased deposit bonus and special discounts in the Store
              </li>
              <li>Reduced commission</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Function({ title, txt }) {
  return (
    <div className="text-white">
      <div className="flex items-center feature">
        <img className="w-16 rounded-lg" src={logo} alt="" />
        <p className="text-2xl p-6 font-semibold">{title}</p>
      </div>
      <p className="py-12">{txt}</p>
    </div>
  );
}

export default MainPage;
