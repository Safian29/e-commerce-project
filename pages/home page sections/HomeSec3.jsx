import React from "react";

// CSS MODULES
import homeCss from "../../css modules/home.module.css";

//MEDIA/ICONS
import img3in1 from "../../src/public/assets_media/wrapper.png";
import RecImg from "../../src/public/assets_media/Rectangle83.png";

const HomeSec3 = () => {
  return (
    <div>
      <div
        className={`w-full gap-[2%] flex pr-[62px] pl-[62px] mt-[60px] mb-[60px] ${homeCss.mainConSec3}`}
      >
        {/* LEFT */}
        <div className={`w-[49%] m-auto ${homeCss.leftSec3}`}>
          <div>
            <img
              src={img3in1}
              alt="image"
              className={`object-contain ${homeCss.leftImgSec3}`}
            />
            <div className={`text-center ${homeCss.leftBtnDivSec3}`}>
              <button
                className={` text-white font-medium text-[20px] rounded-full w-[211px] h-[56px] mt-[20px] ${homeCss.leftBtnSec3}`}
                type="button"
              >
                100% Organic
              </button>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className={`w-[49%] ${homeCss.rightSec3}`}>
          <div className={`mt-[30px] w-fit ${homeCss.rightHtextDivSec3}`}>
            <h4 className={`leading-[90px] ${homeCss.rightMainHtSec3}`}>
              <h4
                className={`font-bold text-[85px] w-full ${homeCss.rightHtext1Sec3} `}
              >
                HIGH QUALITY
              </h4>
              <h4
                className={`font-medium text-[85px] text-justify ${homeCss.rightHtext2Sec3}`}
              >
                ORGANIC SNACKS
              </h4>
            </h4>
          </div>

          <h4
            className={`font-normal text-black text-[15px] text-justify leading-[30px] mt-[20px] ${homeCss.rightText1Sec3}`}
          >
            At Foodie Amazon, we believe in the power of nature to provide
            wholesome, delicious snacks. Our journey began with a simple
            mission: to bring the pure taste of nature to your doorstep. We are
            dedicated to creating snacks that are not only delicious but also
            healthy and free from artificial additives. Our major focus is on
            providing organic snacks that are made with the finest ingredients
            sourced from sustainable farms.
          </h4>
          <h4
            className={`font-normal text-black text-[15px] text-justify mt-[10px] leading-[30px] ${homeCss.rightText1Sec3}`}
          >
            Our commitment to quality means that you won't find any gums,
            preservatives, or artificial sugars in our products. Instead, we use
            natural sweeteners and preservatives to ensure that every bite is as
            healthy as it is tasty.
          </h4>

          <div className={`flex gap-[10px] items-center mt-[20px]`}>
            <img src={RecImg} alt="image" className={`h-[35px] w-[5px]`} />
            <h4
              className={`font-normal text-[13.5px] text-justify leading-[19px] italic ${homeCss.rightText2Sec3}`}
            >
              Our vision is to become a household name in organic snacks, known
              for our commitment to quality and sustainability.
            </h4>
          </div>
          <div className={`mt-[20px]`}>
            <h4
              className={`font-normal text-[16px] text-black ${homeCss.rightText3Sec3}`}
            >
              John Doe
            </h4>
            <h4 className={`font-normal text-[10px] ${homeCss.rightText4Sec3}`}>
              Chief Executive Officer
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSec3;
