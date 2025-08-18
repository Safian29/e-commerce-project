import React from "react";

// PROPS
import HomeSec4Prop1 from "../../props/HomeSec4Prop1";
import HomeSec4Prop2 from "../../props/HomeSec4Prop2";
import HomeSec4Prop3 from "../../props/HomeSec4Prop3";

//MEDIA/ICONS
import chipsImg from "../../src/public/assets_media/sec4_1.png";
import maizeImg from "../../src/public/assets_media/sec4_2.png";
import foodImg from "../../src/public/assets_media/sec4_3.png";
import arrow1Img from "../../src/public/assets_media/arrow2.png";

// CSS MODULES
import homeCss from "../../css modules/home.module.css";


const HomeSec4 = () => {
  const arrOfObjs = [
    {
      id: 1,
      image: chipsImg,
      headText2: "Organic Almond Delight",
      smallText2:
        "Crunchy almonds coated with a touch of organic honey, perfect for a healthy snack.",
      button1: "ORDER NOW",
    },
    {
      id: 2,
      image: maizeImg,
      headText2: "Berry Bliss Bites",
      smallText2:
        "A delightful mix of organic berries and nuts, offering a burst of flavor in every bite.",
      button1: "ORDER NOW",
    },
    {
      id: 3,
      image: foodImg,
      headText2: "Coconut Crunchies",
      smallText2:
        "Light and crispy coconut flakes, naturally sweet and utterly delicious taste.",
      button1: "ORDER NOW",
    },
  ];

  const loopingThrough = arrOfObjs.map((obj) => {
    return (
      <HomeSec4Prop2
        key={obj.id}
        img={obj.image}
        hText2={obj.headText2}
        smText2={obj.smallText2}
        btn1={obj.button1}
      />
    );
  });

  return (
    <div>
      <section className={`pr-[62px] pl-[62px] ${homeCss.sec4Container}`}>
        <HomeSec4Prop1
          hText1={"Bulk Orders"}
          smText1={
            "Our snacks are free from artificial additives, providing a pure and wholesome snacking experience. Discover our range of delightful organic treats designed to satisfy your cravings while supporting a healthy lifestyle."
          }
        />
        <div className={`flex flex-wrap justify-center items-center gap-[5px] w-full mt-[80px]`}>
          {loopingThrough}
        </div>

        <HomeSec4Prop3 />
      </section>
    </div>
  );
};

export default HomeSec4;
