import React, { useState } from "react";

// PROPS
import HomeSec2Prop from "../../props/HomeSec2Prop";
import HomeSec2Prop2 from "../../props/HomeSec2Prop2";

// CSS MODULES
import homeCss from "../../css modules/home.module.css";

//MEDIA/ICONS
import chipsImg from "../../src/public/assets_media/chips.png";
import cookie1Img from "../../src/public/assets_media/cookie1.png";
import cookie2Img from "../../src/public/assets_media/cookie2.png";
import loveImg from "../../src/public/assets_media/love.png";
import starImg from "../../src/public/assets_media/star.png";
import HomeSec4 from "./HomeSec4";

const HomeSec2 = () => {
  const [hoverIndex, setHoverIndex] = useState(0);

  const arrOfObj = [
    {
      id: 1,
      image: chipsImg,
      smallText2: "Coconut Flakes",
      loveImage: loveImg,
      headText2: "Organic Almond Delight",
      starImage: starImg,
      smallText3: "5.0 (18)",
      smallText4: "$110",
      buttontext2: "Add to Cart",
    },
    {
      id: 2,
      image: cookie2Img,
      smallText2: "Coconut Flakes",
      loveImage: loveImg,
      headText2: "Berry Bliss Bites",
      starImage: starImg,
      smallText3: "5.0 (28)",
      smallText4: "$139",
      buttontext2: "Add to Cart",
    },
    {
      id: 3,
      image: cookie1Img,
      smallText2: "Coconut Flakes",
      loveImage: loveImg,
      headText2: "Coconut Crunchies",
      starImage: starImg,
      smallText3: "5.0 (102)",
      smallText4: "$399",
      buttontext2: "Add to Cart",
    },
  ];
  
  return (
    <div>
      <section
        className={`w-full pr-[62px] pl-[62px] mt-[80px] ${homeCss.mainConSec2}`}
      >
        <HomeSec2Prop
          hText1="Our Popular Products"
          smText1="Browse our most popular snacks and make your day more beautiful and glorious."
          btnText1="Browse All"
        />
        <div
          className={`w-full flex flex-wrap justify-center items-center gap-[15px] mt-[40px]`}
        >
          {arrOfObj.map((obj, index) => (
            <div
              key={obj.id}
              className={``}
              onMouseEnter={() => setHoverIndex(index)}
            >
              <HomeSec2Prop2
                img={obj.image}
                smText2={obj.smallText2}
                loveImg={obj.loveImage}
                hText2={obj.headText2}
                starImg={obj.starImage}
                smText3={obj.smallText3}
                smText4={obj.smallText4}
                btnText2={obj.buttontext2}
              />
            </div>
          ))}
        </div>
        <div
          className={`mb-[60px] w-[1080px] h-[3px] m-auto bg-zinc-300 relative ${homeCss.lineContainer}`}
        >
          <span
            className={`w-[350px] h-full bg-black absolute left-[0px] top-[0px] transition-[transform 0.5s ease-in] ${homeCss.blackLine}`}
            style={{
              transform: `translateX(${hoverIndex * 104.3}%)`,
              transition: `transform 0.5s ease`,
            }}
          ></span>
        </div>
      </section>
    </div>
  );
};

export default HomeSec2;
