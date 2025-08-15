import React from "react";

// CSS MODULES
import homeCss from "../css modules/home.module.css"

const HomeSec2Prop2 = ({
  img,
  smText2,
  loveImg,
  hText2,
  starImg,
  smText3,
  smText4,
  btnText2,
}) => {
  return (
    <div>
      <div className={`w-[350px] ${homeCss.cardSec2} `}>
        <img src={img} alt="image" className={`object-contain`} />
        <div className={`w-full flex justify-between items-center mt-[20px]`}>
          <h4 className={`font-normal text-[14px] ${homeCss.smallText2}`}>
            {smText2}
          </h4>
          <img src={loveImg} alt="image" />
        </div>
        <h4 className={`font-bold text-[20px] mt-[5px] ${homeCss.headText2}`}>
          {hText2}
        </h4>
        <div
          className={`w-full flex flex justify-between items-center mt-[15px]`}
        >
          <div className={`flex items-center gap-[7px] `}>
            <img src={starImg} alt="image" className={`object-contain`} />
            <h4 className={`font-normal text-[18px] ${homeCss.smallText3}`}>
              {smText3}
            </h4>
          </div>
          <h4 className={`font-semibold text-[18px] ${homeCss.smallText4}`}>
            {smText4}
          </h4>
        </div>
        <button
          type="button"
          className={`font-semibold text-[18px] w-full h-[50px] rounded-md mt-[30px] mb-[60px] ${homeCss.buttonText2}`}
        >
          {btnText2}
        </button>
      </div>
    </div>
  );
};

export default HomeSec2Prop2
