import { InputContainer, InputSearch } from "./style";


export function SearchInput({search, value}) {
  return (
    <InputContainer>
      <i className="material-symbols-outlined">search</i>
      <InputSearch onChange={search} value={value}/>
    </InputContainer>
  )
}