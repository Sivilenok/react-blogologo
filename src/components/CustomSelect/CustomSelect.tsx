import { useState } from "react";
import Select from "react-select";

interface IProps {
  key: string;
  type: string;
}

const sortOptions: Array<IProps> = [
  { key: "az", type: "Title (A-Z)"  },
  { key: "za", type: "Title (Z-A)" },
];

export const CustomSelect = () => {
  const [value, setValue] = useState("");
  const options = sortOptions.map(({ type }, index) => {
    return <option key={index} value={index}>{type}</option>;
 });

  const handleSelect = (options: string|null) => {
      if (options) {
          // setCurrency(options);
      }
  };

  return (
      <Select
          onChange={handleSelect}
      />
  );   
};
