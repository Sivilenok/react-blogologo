import { StyledSearch } from "./styles";
import { useDispatch } from "react-redux";
import { ChangeEvent } from "react";
import { setKeyword } from "store/slices/searchSlice/searchSlice";

interface IProps {
  placeholder: string | undefined;
  type: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Search = () => {
  const dispatch = useDispatch();

  const onChange = (keyword: string) => {
    dispatch(setKeyword(keyword));
  };

  return (
      <StyledSearch
        onChange={(e) => {
          onChange(e.target.value);
        }}
        type={""}
        placeholder={""}
      />
  );
};

