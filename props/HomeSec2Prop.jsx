
import React from 'react'

// CSS MODULES
import homeCss from "../css modules/home.module.css"

const HomeSec2Prop = ({
  hText1,
  smText1,
  btnText1
}) => {
  return (
    <div>
      <div className="w-full h-fit">
        <h4
          className={`font-bold text-[64px] leading-[70px] ${homeCss.headText1}`}
        >
          {hText1}
        </h4>
      </div>
      <div
        className={`w-full flex justify-between items-center mt-[10px] ${homeCss.smTxtNbtn}`}
      >
        <div className={`w-[40%] leading-[30px] ${homeCss.smTxtDiv}`}>
          <h4 className={`font-normal text-[18px] ${homeCss.smallText1}`}>
            {smText1}
          </h4>
        </div>
        <div className={` ${homeCss.btnTxtDiv}`}>
          <button
            className={`font-semibold text-[18px] w-[162px] h-[60px] rounded-md ${homeCss.buttonText1}`}
          >
            {btnText1}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeSec2Prop
