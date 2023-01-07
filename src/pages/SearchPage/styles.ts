import styled from "styled-components";
import { Color } from "ui/colors";

const Search = styled.input`
  width: 100%;
  height: 56px;
  padding: 15px 20px 15px 20px;
  border: 1px solid ${Color.WHITE};
  background-color: ${Color.WHITE};
  outline: none;
  &::placeholder {
    color: ${Color.PRIMARY}
  }  
`;

const SearchButton = styled.button`
  position: absolute;
  background: none;
  border: none;
  outline: none;
`;

export { Search, SearchButton };