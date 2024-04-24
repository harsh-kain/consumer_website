import { FunctionComponent } from "react";
import { FilterProvider } from "../context/FilterContext";
import SearchBar from "../components/SearchBar";
import SortAndFilter from "../components/SortAndFilter";
import Profiles from "../components/Profiles";

const Home: FunctionComponent = () => {
  return (
    <>
      <FilterProvider>
        <SearchBar />
        <SortAndFilter />
        <Profiles />
      </FilterProvider>
    </>
  );
};

export default Home;
