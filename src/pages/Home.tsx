import { FunctionComponent } from "react";
import SearchBar from "../components/SearchBar";
import SortAndFilter from "../components/SortAndFilter";
import Profiles from "../components/Profiles";

const Home: FunctionComponent = () => {
  return (
    <>
      <SearchBar />
      <SortAndFilter />
      <Profiles />
    </>
  );
};

export default Home;
