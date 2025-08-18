import React from "react";

// CSS MODULES
import homeCss from "../css modules/home.module.css";

const HomeSec4Prop1 = ({ hText1, smText1 }) => {
  return (
    <div>
      <div className={`w-fit m-auto pt-[60px] ${homeCss.homeSec4HTextDiv}`}>
        <h4
          className={`font-bold text-[96px] text-black leading-[85px] ${homeCss.homeSec4HText} `}
        >
          {hText1}
        </h4>
      </div>

      <div className={`mt-[20px] m-auto w-[72%] `}>
        <h4
          className={` font-normal text-[16px] text-black text-center leading-[30px] ${homeCss.homeSec4smText} `}
        >
          {smText1}
        </h4>
      </div>
    </div>
  );
};

export default HomeSec4Prop1;
