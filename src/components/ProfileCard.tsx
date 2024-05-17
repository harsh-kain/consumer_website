import { Link } from "react-router-dom";

const ProfileCard = ({
  doctor,
}: {
  doctor: {
    charges: {
      video_charge: number;
      chat_charge: number;
    };
    first_name: string;
    image: string;
    languages: string[];
    last_name: string;
    rating: number;
    speciality: string;
    title: string;
    years_of_experience: string;
  };
}) => {
  const {
    charges: { video_charge, chat_charge },
    first_name,
    image,
    languages,
    last_name,
    rating,
    speciality,
    title,
    years_of_experience,
  } = doctor;

  return (
    <div className="relative m-5 box-border  flex w-[350px] max-w-full   shrink-0 flex-col items-start gap-[32px] overflow-hidden  rounded-3xl border-[1px] border-solid border-slate-300 bg-oldlace px-7 pb-6 pt-[153px] shadow-[0px_4px_12.5px_rgba(0,_0,_0,_0.07)] duration-300 hover:border-slate-500">
      <div className="flex flex-col items-end  gap-[21px] self-stretch">
        <div className=" relative box-border flex w-[274px]  items-start justify-center px-5 py-0">
          <div className=" flex ">
            <img
              className="absolute left-[47px] top-[-126px] !m-[0] h-[150px] w-[149px]  rounded-[50%] object-cover"
              alt=""
              src={image}
            />
            <button className="z-10 flex cursor-pointer  items-start gap-[4px]  overflow-hidden rounded-2xl bg-[transparent] px-3 py-1 [background:linear-gradient(180deg,_#0b0b0b,_rgba(11,_11,_11,_0.79))] [border:none]">
              <div className=" min-w-[22px] pt-0.5  font-dinpro-bold text-base leading-[18px]  text-white">
                {rating}
              </div>

              <img
                className=" h-5 min-h-[20px] w-5 shrink-0 overflow-hidden"
                alt=""
                src="/materialsymbolsstar.svg"
              />
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start  gap-[16px] self-stretch">
          <h1 className=" m-0 line-clamp-2  h-[5.2rem]   text-[32px]  font-bold leading-tight  text-darkslategray-300">
            {`${title} ${first_name} ${last_name}`}
          </h1>
          <div className="flex flex-col items-center justify-center gap-[16px] self-stretch">
            <div className="flex flex-col items-start  gap-[7px] self-stretch px-[21px] py-0">
              <div className="flex  items-center  gap-[15px]">
                <img
                  className=" h-4 w-4 shrink-0 overflow-hidden"
                  loading="lazy"
                  alt=""
                  src="/frame.svg"
                />
                <div className="   text-base leading-[20px]  text-dimgray-100">
                  {speciality}
                </div>
              </div>
              <div className="flex  items-center  gap-[7px]">
                <img
                  className=" h-6 w-6 shrink-0 overflow-hidden"
                  alt=""
                  src="/hat.svg"
                />
                <div className="   text-base font-semibold leading-[20px]  text-dimgray-100">
                  {`${years_of_experience} years of Experience`}
                </div>
              </div>
              <div className="flex  items-center  gap-[12px] self-stretch">
                <img
                  className=" h-4 w-[18px] object-cover"
                  loading="lazy"
                  alt=""
                  src="/comment-1@2x.png"
                />
                <div className="text-base leading-[20px]  text-dimgray-200">
                  Speaks:{" "}
                  {languages.length > 0 ? languages.join(", ") : "English"}
                </div>
              </div>
            </div>
            <div className=" flex  items-center justify-center gap-[8px] self-stretch px-2 py-0">
              <div className="box-border flex min-w-[104px] flex-1 flex-col items-center  gap-[4px] rounded-lg border-[1px] border-solid border-darkolivegreen-200 bg-oldlace px-[7px] pb-[3px] pt-1.5">
                <span className="whitespace-nowrap  text-sm font-semibold leading-[20px]  text-darkslategray-200">
                  Video Consultation
                </span>
                <b className=" whitespace-nowrap  text-sm leading-[20px]  text-darkolivegreen-200">
                  {`₹${video_charge}`}
                </b>
              </div>
              <div className="box-border flex min-w-[104px] flex-1 flex-col items-center  gap-[4px] rounded-lg border-[1px] border-solid border-darkolivegreen-200 bg-oldlace px-[7px] pb-[3px] pt-1.5">
                <span className="  text-sm font-semibold leading-[20px]  text-darkslategray-200">
                  Chat Consultation
                </span>
                <b className=" whitespace-nowrap  text-sm leading-[20px]  text-darkolivegreen-200">
                  {chat_charge === 0 ? "Free" : `₹${chat_charge}`}
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
            className=" w-full  min-w-[88px] cursor-pointer  whitespace-nowrap rounded-lg border-[1.5px] border-solid border-darkolivegreen-200   bg-white px-5 py-[9px] pl-[1.5px] text-center   text-base font-semibold leading-[20px]  text-darkolivegreen-200 duration-100  hover:bg-whitesmoke-100    active:scale-95"
          >
            View Profile
          </Link>

          <button className=" w-full min-w-[88px] cursor-pointer whitespace-nowrap rounded-xl  bg-darkolivegreen-200 py-[16.5px] text-center text-base  font-semibold leading-[20px] text-white  duration-100 hover:bg-seagreen   active:scale-95">
            Book a consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
