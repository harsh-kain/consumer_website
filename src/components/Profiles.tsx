import { useSearchParams } from "react-router-dom";
import { useDoctorListQuery } from "../services/api";
import ProfileCard from "./ProfileCard";
import { Bars } from "react-loader-spinner";

const Profiles = () => {
  const [searchParams] = useSearchParams();
  const location = searchParams.get("location");
  const name = searchParams.get("name");
  const gender = searchParams.get("gender");
  const speciality = searchParams.get("speciality");
  const languages = searchParams.get("languages");
  const {
    isError,
    isSuccess,
    data: doctorList,
    isFetching,
  } = useDoctorListQuery({ location, name, gender, speciality, languages });

  if (isFetching) {
    return (
      <div className="mt-10 flex w-full items-center justify-center">
        <Bars
          height="80"
          width="80"
          color="#3a643b"
          ariaLabel="bars-loading"
          visible={true}
        />
      </div>
    );
  }

  if (isError)
    return (
      <div className="flex w-full items-center justify-center">
        <h1 className=" font-dinpro-bold text-xl">
          ⚠️ Something Went Wrong! Please Try Again.
        </h1>
      </div>
    );

  if (isSuccess)
    return (
      <div className=" my-8  w-full">
        <div className=" flex flex-wrap items-center justify-center ">
          {!doctorList.total ? (
            <h1 className=" font-dinpro-bold text-xl">No Doctors Found!</h1>
          ) : (
            doctorList.doctors.map(
              (
                doctor: {
                  charges: {
                    video_charge: number;
                    chat_charge: number;
                  };
                  first_name: string;
                  gender: string;
                  image: string;
                  languages: string[];
                  last_name: string;
                  location: string;
                  rating: number;
                  speciality: string;
                  title: string;
                  years_of_experience: string;
                },
                i: number,
              ) => <ProfileCard key={i} doctor={doctor} />,
            )
          )}
        </div>
      </div>
    );
};

export default Profiles;
