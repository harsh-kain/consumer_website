import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const ProfileCard: FunctionComponent = () => {
  return (
    <div className="relative m-5  box-border flex   max-w-full shrink-0 flex-col items-start gap-[32px]  overflow-hidden rounded-3xl border-[1px] border-solid border-slate-300 bg-oldlace px-7 pb-6 pt-[153px] shadow-[0px_4px_12.5px_rgba(0,_0,_0,_0.07)]">
      <div className="flex flex-col items-end  gap-[21px] self-stretch">
        <div className=" relative box-border flex w-[274px]  items-start justify-center px-5 py-0">
          <div className=" flex ">
            <img
              className="absolute left-[47px] top-[-126px] !m-[0] h-[150px] w-[149px]  rounded-[50%] object-cover"
              alt=""
              src="/src/assets/ellipse-725@2x.png"
            />
            <button className="z-10 flex cursor-pointer  items-start gap-[4px]  overflow-hidden rounded-2xl bg-[transparent] px-3 py-1 [background:linear-gradient(180deg,_#0b0b0b,_rgba(11,_11,_11,_0.79))] [border:none]">
              <div className=" min-w-[22px] pt-0.5  font-dinpro-bold text-base leading-[18px]  text-white">
                4.5
              </div>

              <img
                className=" h-5 min-h-[20px] w-5 shrink-0 overflow-hidden"
                alt=""
                src="/src/assets/materialsymbolsstar.svg"
              />
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start  gap-[16px] self-stretch">
          <h1 className="  m-0  text-[32px]  font-bold leading-[28px]  text-darkslategray-300">
            Dr. Prerna Narang
          </h1>
          <div className="flex flex-col items-center justify-center gap-[16px] self-stretch">
            <div className="flex flex-col items-start  gap-[7px] self-stretch px-[21px] py-0">
              <div className="flex  items-center  gap-[15px]">
                <img
                  className=" h-4 w-4 shrink-0 overflow-hidden"
                  loading="lazy"
                  alt=""
                  src="/src/assets/frame.svg"
                />
                <div className="   text-base leading-[20px]  text-dimgray-100">
                  Male-Female Infertility
                </div>
              </div>
              <div className="flex  items-center  gap-[7px]">
                <img
                  className=" h-6 w-6 shrink-0 overflow-hidden"
                  alt=""
                  src="/src/assets/frame-1.svg"
                />
                <div className="   text-base font-semibold leading-[20px]  text-dimgray-100">
                  7 years of Experience
                </div>
              </div>
              <div className="flex  items-center  gap-[12px] self-stretch">
                <img
                  className=" h-4 w-[18px] object-cover"
                  loading="lazy"
                  alt=""
                  src="/src/assets/comment-1@2x.png"
                />
                <div className="text-base leading-[20px]  text-dimgray-200">
                  Speaks: English, Hindi, Marathi
                </div>
              </div>
            </div>
            <div className=" flex  items-center justify-center gap-[8px] self-stretch px-2 py-0">
              <div className="box-border flex min-w-[104px] flex-1 flex-col items-center  gap-[4px] rounded-lg border-[1px] border-solid border-darkolivegreen-200 bg-oldlace px-[7px] pb-[3px] pt-1.5">
                <span className="whitespace-nowrap  text-sm font-semibold leading-[20px]  text-darkslategray-200">
                  Video Consultation
                </span>
                <b className=" whitespace-nowrap  text-sm leading-[20px]  text-darkolivegreen-200">
                  ₹800
                </b>
              </div>
              <div className="box-border flex min-w-[104px] flex-1 flex-col items-center  gap-[4px] rounded-lg border-[1px] border-solid border-darkolivegreen-200 bg-oldlace px-[7px] pb-[3px] pt-1.5">
                <span className="  text-sm font-semibold leading-[20px]  text-darkslategray-200">
                  Chat Consultation
                </span>
                <b className=" whitespace-nowrap  text-sm leading-[20px]  text-darkolivegreen-200">
                  Free
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex  self-stretch px-px ">
        <div className="flex flex-1 flex-col  gap-3">
          <Link
            to={"/profile"}
            className="  w-full min-w-[88px]  cursor-pointer whitespace-nowrap rounded-lg border-[1.5px] border-solid   border-darkolivegreen-200 bg-white px-5 py-[9px] pl-[1.5px]   text-center text-base font-semibold  leading-[20px]  text-darkolivegreen-200    hover:bg-whitesmoke-100"
          >
            View Profile
          </Link>

          <button className=" w-full min-w-[88px] cursor-pointer  whitespace-nowrap rounded-xl bg-darkolivegreen-200 py-[16.5px]  text-center text-base font-semibold  leading-[20px] text-white   hover:bg-seagreen">
            Book a consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
