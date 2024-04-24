import ProfileCard from "./ProfileCard";

const Profiles = () => {
  return (
    <div className=" my-8  w-full">
      <div className=" flex flex-wrap items-center justify-center ">
        <ProfileCard />;
        <ProfileCard />;
        <ProfileCard />;
      </div>
    </div>
  );
};

export default Profiles;
