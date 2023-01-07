import { InputWrapper } from "components/Input/styles";
import { useInput } from "hooks";
import { useNavigate } from "react-router";
import { Search, SearchButton } from "./styles";

export const SearchPage = () => {
  const navigator = useNavigate();
  const { value, onChange } = useInput();
  const handleSearch = () => {
    navigator(`search/${value}/1`);
  };

  return (
    <InputWrapper>
      <Search placeholder="Search" onChange={onChange} value={value} />
      <SearchButton onClick={handleSearch} />
    </InputWrapper>
  )
};
