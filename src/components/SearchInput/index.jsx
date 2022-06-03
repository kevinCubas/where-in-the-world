import { useState } from "react";
import { InputContainer, InputSearch } from "./style";

export function SearchInput() {
  const [searchName, setSearchName] = useState("")
  return {
    searchName,
    renderInput:(
    <InputContainer>
      <i className="material-symbols-outlined">search</i>
      <InputSearch onChange={(e) => setSearchName(e.target.value)} value={searchName}/>
    </InputContainer>
  )}
}