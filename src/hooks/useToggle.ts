import { useState } from "react";

export const useToogle = (initValue: boolean = false): [value: boolean, toogle: () => void] => {
  const [value, setValue] = useState<boolean>(initValue);
  const toggle = () => setValue((prevValue) => !prevValue);
  return [value, toggle];
};