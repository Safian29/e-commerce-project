import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

// PROPS
import RegLogBtn from "../props/RegLogBtn";

//MEDIA/ICONS
import openEye from "../src/assets/icons/eye.png";
import hideEye from "../src/assets/icons/hidden.png";
import leftBgImg from "../src/assets/media/Left.png";

// CSS MODULES
import regCss from "../css modules/register.module.css";

const Login = () => {
  const passwordInpRef = useRef(null);
  const buttonRef = useRef(null);
  const openImgRef = useRef(null);
  const hideImgRef = useRef(null);

  useEffect(() => {
    const passRef = passwordInpRef.current;
    const btnRef = buttonRef.current;
    const openImgRef2 = openImgRef.current;
    const hideImgRef2 = hideImgRef.current;

    const showPassword = () => {
      if (passRef.type === "password") {
        passRef.type = "text";
        openImgRef2.style.display = "none";
        hideImgRef2.style.display = "block";
      } else {
        passRef.type = "password";
        openImgRef2.style.display = "block";
        hideImgRef2.style.display = "none";
      }
    };
    btnRef.addEventListener("click", showPassword);

    return () => {
      btnRef.removeEventListener("click", showPassword);
    };
  }, []);

  return (
    <>
      <section className={`flex h-full w-full ${regCss.mainContainer}`}>
        {/* LEFT */}
        <div
          className={` h-[585px] w-[50%] bg-[url(${leftBgImg})] bg-cover bg-no-repeat ${regCss.leftContainer}`}
        ></div>

        {/* RIGHT */}
        <div
          className={`h-[585px] w-[50%] pt-[130px] pl-[60px] ${regCss.rightContainer}`}
        >
          <div className={` w-[80%] ${regCss.formBox}`}>
            <h4 className={`font-bold text-[40px] mb-[10px] ${regCss.hText}`}>
              Login
            </h4>

            {/* sign in link */}
            <span className={` font-normal text-[16px] ${regCss.loginText}`}>
              Already have an account?{" "}
            </span>
            <Link to="/" className={` font-bold text-[16px] ${regCss.loginLink}`}>
              Sign Up
            </Link>

            {/* form */}
            <form action="" className=" w-full ">
              <input
                type="email"
                placeholder="Email Address"
                className={`block focus:outline-none w-full font-normal text-[16px] mt-[20px] ${regCss.inputTag}`}
              />
              <div className={`${regCss.line}`}></div>

              {/* password div */}
              <div className="password-container flex ">
                <input
                  ref={passwordInpRef}
                  type="password"
                  placeholder="Password"
                  className={`block focus:outline-none w-full font-normal text-[16px] mt-[20px] ${regCss.inputTag}`}
                />
                <button ref={buttonRef} type="button">
                  <img
                    ref={openImgRef}
                    src={openEye}
                    alt="icon"
                    className="block h-[20px] w-[20px] relative top-[10px]"
                  />
                  <img
                    ref={hideImgRef}
                    src={hideEye}
                    alt="icon"
                    className="hidden h-[20px] w-[20px] relative top-[10px]"
                  />
                </button>
              </div>

              <div className={`${regCss.line}`}></div>

              <div className="mt-[25px] flex items-center gap-[10px]">
                <input type="checkbox" className=" h-[20px] w-[20px]" />
                <div className=" flex justify-between w-full">
                  <span className={`font-normal text-[16px] ${regCss.cbText1}`}>
                    Remember me{" "}
                  </span>

                  <span className={`font-bold text-[16px] ${regCss.cbText2}`}>
                    Forgot Password?
                  </span>
                </div>
              </div>
              <RegLogBtn classname={` ${regCss.BtnSignUp}`} name="Sign Up" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
