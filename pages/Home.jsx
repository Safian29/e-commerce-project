import React from "react";

//PAGES
import Header from "./Header";

// CSS MODULES
import homeCss from "../css modules/home.module.css";

//MEDIA/ICONS
import shopLogoBtn from "../public/assets_media/solar_shop-outline.png";
import lineDots from "../public/assets_media/Frame 104.png";
import foodImg from "../public/assets_media/Frame 142.png";
import deliveryIcon from "../public/assets_media/Frame 93 (1).png";
import pickUpIcon from "../public/assets_media/Frame 93 (2).png";
import dineIcon from "../public/assets_media/Frame 93.png";
import bgImg1 from "../public/assets_media/image 40.png";
import bgImg2 from "../public/assets_media/Rectangle 84.png";

const Home = () => {
  return (
    <div>
      <Header />
      {/* SECTION 1 */}

      <section className={` `}>
        <div className={`flex pr-[62px] pl-[62px] ${homeCss.mainContainer}`}>
          {/* LEFT */}
          <div className={` w-[50%] mt-[70px] ${homeCss.leftContainer}`}>
            <h4
              className={`font-medium text-[18px] text-black ${homeCss.leftT1}`}
            >
              Discover the Pure Taste of Nature
            </h4>
            <div
              className={` w-[100%] leading-[60px] mt-[30px] ${homeCss.leftT2Div}`}
            >
              <span className={`text-[80px] font-bold ${homeCss.leftT2g}`}>
                Organic{" "}
              </span>
              <span className={`text-[80px] font-bold ${homeCss.leftT2o}`}>
                Snacks{" "}
              </span>
              <span className={`text-[80px] font-bold ${homeCss.leftT2g}`}>
                Made{" "}
              </span>
              <span className={`text-[80px] font-bold ${homeCss.leftT2o}`}>
                with{" "}
              </span>
              <span className={`text-[80px] font-bold ${homeCss.leftT2g}`}>
                Love, Just{" "}
              </span>
              <span className={`text-[80px] font-bold ${homeCss.leftT2o}`}>
                for{" "}
              </span>
              <span className={`text-[80px] font-bold ${homeCss.leftT2g}`}>
                You
              </span>
            </div>

            <button
              className={`h-[45px] w-[150px] text-[16px] font-semibold text-white rounded-md flex justify-center items-center gap-[5px] pl-[15px] pr-[15px] ${homeCss.leftShopBtn}`}
            >
              <h4>Shop Now </h4>
              <img
                src={shopLogoBtn}
                alt="shop icon"
                className="h-[23px] w-[23px]"
              />
            </button>

            <img src={lineDots} alt="image" className="w-[90px] mt-[20px] " />
          </div>

          {/* RIGHT */}
          <div className={` w-[50%] ${homeCss.rightContainer}`}>
            <img src={foodImg} alt="food image" className={` object-contain`} />

            <div
              className={`flex justify-center items-center gap-[2.3%] mb-[20px] ${homeCss.innerRightCon}`}
            >
              {/* delivery */}
              <div
                className={`flex items-center w-fit ${homeCss.deliveryContainer}`}
              >
                <img src={deliveryIcon} alt="icon" />
                <div className="w-[180px]">
                  <h4
                    className={`font-medium text-[17px] text-white ${homeCss.rightT1}`}
                  >
                    Fast Delivery
                  </h4>
                  <h4
                    className={`font-normal text-[14px] text-white ${homeCss.rightT2}`}
                  >
                    Deliver within 30 minutes
                  </h4>
                </div>
              </div>
              {/* dine */}
              <div
                className={`flex items-center w-fit ${homeCss.dineContainer}`}
              >
                <img src={pickUpIcon} alt="icon" />
                <div className="w-[190px]">
                  <h4
                    className={`font-medium text-[17px] text-white ${homeCss.rightT1}`}
                  >
                    Dine in
                  </h4>
                  <h4
                    className={`font-normal text-[14px] text-white ${homeCss.rightT2}`}
                  >
                    Enjoy your snacks fresh and healthy
                  </h4>
                </div>
              </div>
              {/* pick up */}
              <div
                className={`flex items-center w-fit ${homeCss.pickUpContainer}`}
              >
                <img src={dineIcon} alt="icon" />
                <div className="w-[180px]">
                  <h4
                    className={`font-medium text-[17px] text-white ${homeCss.rightT1}`}
                  >
                    Pick up
                  </h4>
                  <h4
                    className={`font-normal text-[14px] text-white ${homeCss.rightT2}`}
                  >
                    Delivery at your doorstep
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`shadow-[0px_15px_70px_10px_#ffffff] bg-lime-600 ${homeCss.mainSpicy}`}
        >
          <div
            className={`${homeCss.spicy} bg-green-600 w-[100%] h-[300px] bg-[url(${bgImg1})] bg-no-repeat rounded-t-4xl `}
          >
            <div
              className={`${homeCss.spicy1} flex justify-center items-center gap-[35px] `}
            >
              <div className={`w-[15%] ${homeCss.spicyTdiv} mt-[80px]`}>
                <h4
                  className={`font-semibold text-[56px] text-white text-center  ${homeCss.spicyHt}`}
                >
                  1975+
                </h4>
                <h4
                  className={`font-medium text-[16px] text-white text-center mt-[-15px] ${homeCss.spicyT}`}
                >
                  Total Products
                </h4>
              </div>
              <div className={`w-[15%] ${homeCss.spicyTdiv} mt-[80px]`}>
                <h4
                  className={`font-semibold text-[56px] text-white text-center  ${homeCss.spicyHt}`}
                >
                  2880+
                </h4>
                <h4
                  className={`font-medium text-[16px] text-white text-center mt-[-15px] ${homeCss.spicyT}`}
                >
                  Satisfies Clients
                </h4>
              </div>
              <div className={`w-[15%] ${homeCss.spicyTdiv} mt-[80px]`}>
                <h4
                  className={`font-semibold text-[56px] text-white text-center  ${homeCss.spicyHt}`}
                >
                  3219+
                </h4>
                <h4
                  className={`font-medium text-[16px] text-white text-center mt-[-15px] ${homeCss.spicyT}`}
                >
                  Product Sales
                </h4>
              </div>
              <div className={`w-[15%] ${homeCss.spicyTdiv} mt-[80px]`}>
                <h4
                  className={`font-semibold text-[56px] text-white text-center  ${homeCss.spicyHt}`}
                >
                  100%
                </h4>
                <h4
                  className={`font-medium text-[16px] text-white text-center mt-[-15px] ${homeCss.spicyT}`}
                >
                  Guarantee
                </h4>
              </div>
            </div>
            <div className={`${homeCss.spicyImgWhite} `}>
              <img src={bgImg2} alt="" className={`relative bottom-[-90px]  `} /> 
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
