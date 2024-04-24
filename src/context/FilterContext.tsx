import { ReactNode, createContext, useState } from "react";

const FilterContext = createContext({});

const filters = [
  {
    id: "expertise",
    name: "Expertise",
    options: [
      { value: "hair-care", label: "Hair Care" },
      { value: "skin-care", label: "Skin Care" },
      { value: "body-care", label: "Body Care" },
    ],
  },
  {
    id: "gender",
    name: "Gender",
    options: [
      { value: "female", label: "Female" },
      { value: "male", label: "Male" },
    ],
  },
  {
    id: "fees",
    name: "Fees",
    options: [
      { value: "0-500", label: "Rs.0 - Rs.500" },
      { value: "500-1000", label: "Rs.500 - Rs.1000" },
      { value: "1000-1500", label: "Rs.1000 - Rs.1500" },
    ],
  },
  {
    id: "languages",
    name: "Languages",
    options: [
      { value: "english", label: "English" },
      { value: "hindi", label: "Hindi" },
      { value: "bengali", label: "Bengali" },
    ],
  },
];

const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <FilterContext.Provider value={{ selected, setSelected, filters }}>
      {children}
    </FilterContext.Provider>
  );
};

export { FilterContext, FilterProvider };
