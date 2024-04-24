import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";

interface FilterHookResult {
  selected: string[];
  setSelected: (value: (arr: string[]) => string[]) => string[];
  filters: {
    id: string;
    name: string;
    options: { value: string; label: string }[];
  }[];
}
const useFilter = (): FilterHookResult => {
  const context = useContext(FilterContext);

  if (context === undefined) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context as FilterHookResult;
};

export default useFilter;
