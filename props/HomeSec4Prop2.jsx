import React from "react";

// MEDIA/ICONS
import arrow1Img from "../src/public/assets_media/arrow2.png";

// CSS MODULES
import homeCss from "../css modules/home.module.css";

const HomeSec4Prop2 = ({ img, hText2, smText2, btn1 }) => {
  return (
    <div>
      <div
        className={`pt-[16px] pr-[16px] pb-[24px] pl-[16px] bg-white w-[100%] ${homeCss.sec4CardContainer}`}
      >
        <div className={``}>
          <img src={img} alt="image" className={`object-contain m-auto`} />
        </div>

        <h4
          className={`font-bold text-[20px] text-center mt-[20px] ${homeCss.HomeSec4HText2}`}
        >
          {hText2}
        </h4>
        <div className={` m-auto `}>
          <h4
            className={`font-normal text-[16px] leading-[24px] text-[#4D4D4D] text-center mt-[20px] ${homeCss.HomeSec4smText2}`}
          >
            {smText2}
          </h4>
        </div>

        {/* <button className={`flex items-center m-auto gap-[5px]`}>
          <h4>{btn1}</h4>
          <img src={arrow1Img} alt="image" className={`m-auto`} />
        </button> */}
      </div>
    </div>
  );
};

export default HomeSec4Prop2;
