import "../Navbar/navbar.css";

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-9 px-72 absolute z-10 w-full">
      <div className="flex">
        <a href="">
          <svg
            width="147"
            height="47"
            viewBox="0 0 147 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M45.0113 17.3281C45.0219 17.7253 45.9556 20.8812 45.9556 23.742C45.9556 27.6279 45.8222 29.6514 44.371 33.2368C43.7095 34.8792 42.9519 36.1351 41.9755 37.5575C41.6554 38.0244 41.298 38.427 40.9992 38.8725C43.8109 38.8725 46.6172 39.0227 49.4341 39.0227L50.5279 29.1308L54.5399 39.5863L58.4773 29.1308C58.4826 29.3831 58.5573 29.9735 58.6 30.274L58.9468 33.8862C59.0001 34.6645 59.0908 35.5394 59.1709 36.2747C59.2616 37.0744 59.3363 38.3572 59.459 39.0818C61.6944 38.9422 63.8605 38.7436 66.0853 38.5236C66.096 38.3411 65.9572 37.4984 65.9199 37.2462L63.5137 17.2529H57.4529L55.3349 23.1248L54.5719 25.0194L54.2358 24.0533L52.1284 18.2566C52.0004 17.8809 51.867 17.6125 51.787 17.2583C49.4502 17.2583 47.2787 17.3388 45.0166 17.3388L45.0113 17.3281Z"
              fill="#FEFEFE"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M79.0973 32.7696C74.4664 32.7696 72.4657 27.5258 75.4961 24.4718C78.5585 21.3856 83.7443 23.6721 83.7443 27.8586C83.7443 29.3453 83.1467 30.4886 82.3892 31.2453C81.5142 32.1148 80.4792 32.7696 79.1027 32.7696H79.0973ZM66.9758 27.8586C66.9758 30.4027 67.6907 32.3832 69.1365 34.3208C70.2836 35.8612 72.1776 37.3533 74.0182 38.1208C74.7118 38.4107 75.4321 38.6468 76.2377 38.8186C76.6058 38.8991 77.1287 38.9796 77.4594 39.0118C78.4678 39.1138 79.2307 39.0655 80.2017 39.0225C84.2085 38.84 87.815 36.1081 89.7037 32.6623C90.0345 32.0612 90.3653 31.2185 90.5093 30.5422C91.427 26.2752 90.3493 23.0602 87.4256 20.1136C85.5636 18.235 82.5065 16.7698 79.6522 16.7698C77.2887 16.7698 75.8802 16.8073 73.6928 17.8271C72.471 18.3961 71.2706 19.2173 70.3796 20.119C68.3042 22.2176 66.9758 24.5523 66.9758 27.8586Z"
              fill="#FEFEFE"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M105.39 17.2475V27.3058C105.203 27.1663 104.061 25.175 103.848 24.8154L100.102 18.4497C99.9638 18.219 99.8517 18.0311 99.7184 17.8057C99.4943 17.4246 99.4889 17.2475 99.2489 17.2475H93.028V39.1085C95.1088 38.9851 97.5096 38.7972 99.5103 38.6362L99.4836 37.0475C99.4836 34.1706 99.4836 31.2937 99.4836 28.4168C99.681 28.5618 100.849 30.5638 101.074 30.9341L105.342 38.0458L105.688 38.6308L111.931 38.604L111.925 16.7751L105.39 17.2528V17.2475Z"
              fill="#FEFEFE"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.8549 23.742C17.8549 24.9657 18.1163 25.964 18.6658 26.9623C20.2931 29.9036 25.9591 30.5262 25.9591 31.6587C25.9591 33.1186 24.1664 32.9254 22.8113 32.9254C21.9737 32.9254 21.1787 32.8503 20.4051 32.7322L18.0896 32.3672V38.4645C21.2054 38.8294 23.7503 39.3769 26.8714 38.7489C28.2372 38.4752 29.4323 38.019 30.3659 37.3588C33.7271 34.9811 33.9032 29.5762 30.9154 27.3005C29.3682 26.1197 27.8584 25.5132 26.0764 24.8047C23.2061 23.6614 25.1108 22.7114 26.6633 22.7114C28.5786 22.7114 30.1578 22.91 32.0145 23.3448C31.2729 20.0922 30.8568 18.9543 29.8911 17.0597L29.6937 17.0221C29.5656 17.0006 29.4376 16.9792 29.3042 16.9577C24.2144 16.1902 17.8442 17.2797 17.8442 23.7366L17.8549 23.742Z"
              fill="#FEFEFE"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M114.992 17.4888V38.6306L127.039 38.636L127.781 35.6571C127.904 35.1204 128.026 34.6427 128.122 34.1811L128.458 32.6139H121.768V30.3972H125.94V25.0889H121.768V23.0279L127.92 23.0333L127.69 21.7397C127.471 20.7092 127.226 19.668 126.991 18.6374L126.628 17.2419H115.233C115.051 17.2419 114.998 17.2956 114.998 17.4781L114.992 17.4888Z"
              fill="#FEFEFE"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M127.904 17.328C127.931 17.6232 128.427 18.6322 128.592 19.0133L132.391 27.3058C132.529 27.5795 132.615 27.8264 132.759 28.127L133.933 30.6657C134.375 31.7499 134.605 31.1703 133.677 33.1132L131.35 38.0834C131.185 38.5342 131.574 38.3625 132.049 38.4161L136.483 38.867C136.84 38.8992 138.5 39.0173 138.686 39.1085C138.734 38.9099 138.846 38.6577 138.916 38.4645L144.336 24.1981C145.025 22.4752 145.713 20.4893 146.39 18.7449C146.545 18.3478 146.678 18.0096 146.796 17.5963L146.876 17.328C145.302 17.328 141.77 16.7751 139.951 16.7751L138.329 22.0351C138.233 22.3786 138.158 22.5987 138.067 22.8831C137.987 23.13 137.843 23.5755 137.822 23.8224C137.545 23.6185 136.024 19.0777 135.864 18.5839C135.757 18.2565 135.645 18.0096 135.549 17.7144C135.448 17.4139 135.288 17.0381 135.224 16.7751L133.831 16.8503L132.108 16.9791L129.723 17.1831C129.152 17.2421 128.56 17.328 127.899 17.328H127.904Z"
              fill="#FEFEFE"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.931632 27.3863C0.931632 29.5279 0.88895 30.1559 1.6092 32.2491C2.55353 34.9918 5.11976 37.5252 7.88872 38.443C10.2255 39.2212 12.2422 39.2212 14.7444 38.7865C15.0379 38.7382 15.3313 38.6791 15.6194 38.6201L15.7581 37.6647L15.9182 36.4785L16.2863 33.7251L16.5157 31.8197L15.8061 32.1364C13.3199 33.387 9.44126 32.9308 8.03811 29.8929C7.48325 28.6906 7.53127 26.914 8.07012 25.7761C8.5823 24.6919 9.63333 23.8224 10.7591 23.4091C12.2529 22.8617 13.5867 22.9905 14.6004 23.2428C14.6698 23.2589 14.7391 23.2803 14.8085 23.2964C15.1659 23.3984 15.5234 23.5272 15.8862 23.6346L16.4944 23.8868C16.361 23.4896 15.454 17.3602 15.3527 17.167C15.0165 16.8288 12.2476 16.7644 11.4793 16.7644C9.71869 16.7644 7.68599 17.43 6.36819 18.1921C5.13576 18.906 3.72727 20.1673 2.91632 21.3696C2.55887 21.9009 2.20141 22.4484 1.93465 23.0764C1.43847 24.2464 0.931632 25.7493 0.931632 27.3756V27.3863Z"
              fill="#FEFEFE"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M31.4758 6.87245C29.011 6.87245 29.4325 4.69332 30.4675 3.56619C31.6626 2.2673 35.0931 1.0865 35.0931 3.78625C35.0931 5.20859 32.9484 6.87245 31.4705 6.87245H31.4758ZM28.5628 4.81141C28.5628 6.7329 29.6672 7.89224 31.4545 8.31626C31.7639 8.3914 32.4895 8.28942 32.831 8.4397C33.4285 8.7027 34.1008 9.45949 34.1434 10.2861C34.1648 10.7154 33.9514 11.2253 33.914 11.6225C34.2662 11.7191 34.9704 12.4008 35.1945 12.7067C36.5069 14.4779 35.5626 15.6641 35.5626 16.2921C35.5626 16.7322 37.3712 17.2152 37.3712 19.1421C37.3712 20.8167 35.84 21.7667 34.5062 22.2015C33.8553 22.4108 33.4819 22.5342 33.8287 23.2588C36.7524 23.2588 38.3476 23.9029 39.1532 26.4577C39.3399 27.0535 39.676 27.397 40.0442 26.9784C40.0815 26.9354 40.5884 24.6275 42.9092 25.6097C43.2506 25.7546 43.4267 25.9532 43.7468 26.0337C44.1843 25.7385 44.0936 25.3467 44.0082 24.6651C43.8802 23.656 44.0776 24.2894 43.4053 23.2105C43.256 22.9744 43.1599 22.8026 43.0212 22.5664C40.8658 18.9757 43.1172 16.7161 43.1172 16.1364C43.1172 14.7463 42.1676 11.6279 41.6767 10.3773C40.6364 7.70975 39.5747 5.73995 38.0808 3.46421C36.8377 1.56955 37.1365 1.44074 35.1038 1.15627C34.5916 1.0865 34.1594 1.00599 33.6419 0.887906C33.1991 0.785927 32.7029 0.64101 32.3135 0.485358C29.9286 -0.464655 31.1824 0.0881774 30.4035 1.20994C30.2594 1.41927 30.1794 1.48904 30.0193 1.693C29.3845 2.50346 28.5575 3.59303 28.5575 4.81677L28.5628 4.81141Z"
              fill="#D45F93"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M35.3274 28.4973C35.3274 31.1756 35.1673 32.8394 34.335 35.3406C33.5347 37.7451 32.5317 39.9242 31.0645 41.8726C30.8245 42.1892 30.6111 42.5166 30.3443 42.8118L29.56 43.6867C28.2049 45.2325 27.634 45.474 26.1668 46.6065C26.0921 46.6656 26.0708 46.6763 26.0281 46.7139C27.8901 46.7139 31.8168 44.846 33.4174 43.6813C34.7938 42.683 35.386 42.1839 36.6078 40.9494C37.7335 39.8169 38.8219 38.3409 39.6755 36.983C40.2144 36.1296 41.2974 34.0471 41.6389 33.0971C41.7403 32.8072 41.8416 32.5442 41.9537 32.2276C42.1671 31.6479 42.3485 31.1165 42.5352 30.4402C42.7273 29.764 43.3408 27.236 43.3568 26.5168C41.4202 25.5829 40.9667 27.3863 40.6252 27.7298C40.1077 28.2504 39.1367 28.2558 38.6085 27.7298C38.2884 27.4131 38.3578 27.338 38.2564 26.8978C37.9043 25.3306 35.9996 23.9834 34.303 23.9834C33.6628 23.9834 34.4951 24.5523 34.9219 25.8942C35.146 26.5919 35.322 27.5956 35.322 28.4973H35.3274Z"
              fill="#D45F93"
            />
          </svg>
        </a>
      </div>
      <div className="">
        <div className="">
          <NavItem txt="Home" />
          <NavItem txt="Pricing" />
          <NavItem txt="Features" />
        </div>
      </div>
      <div className="text-white text-base border-2 border-purple-500 rounded-full p-4 bg-purple-500">
        <a className="p-4 text-white font-bold" href="https://cs.money/">SIGN IN</a>
      </div>
    </nav>
  );
}

function NavItem({ txt }) {
  return (
    <a className="inline-block mx-7 text-white text-base" href="">
      {txt}
    </a>
  );
}

export default Navbar;
