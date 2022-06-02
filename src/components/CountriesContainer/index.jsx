import { useState } from "react";
import { baseURL } from "../../baseURL";
import { useFetch } from "../../hooks/useFetch";
import { CountriesCard } from "../CountriesCard";
import { FilterOption } from "../FilterOption";
import { SearchInput } from "../SearchInput";
import { Container, DisplayCardsContainer, SearchFieldsContainer } from "./style";

export function CountriesContainer() {
  const { countriesData, error, isFetching } = useFetch(baseURL)
  const [searchName, setSearchName] = useState("")

  function searchByName(event) {
    setSearchName(event.target.value)
  }
  return (
    <Container>
      <SearchFieldsContainer>
        <SearchInput search={searchByName} value={searchName}/>
        <FilterOption />
      </SearchFieldsContainer>
      <DisplayCardsContainer>
      {countriesData.filter(country => {
          return country.name.common.toLowerCase().includes(searchName.toLocaleLowerCase())
        }).map((country) => {
          return (
            <CountriesCard key={country.name.official} 
              id={country.name.official}
              name={country.name.common} 
              flags={country.flags.svg}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
            )
          })}
      </DisplayCardsContainer>
    </Container>
  )

}