import { StyledSearch } from "./styles";
import { useDispatch } from "react-redux";
import { setKeyword } from "../../store/searchSlice/searchSlice";
import { ChangeEvent } from "react";

interface IProps {
  placeholder: string;
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

