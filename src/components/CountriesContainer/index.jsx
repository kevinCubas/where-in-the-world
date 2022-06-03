import { baseURL } from "../../baseURL";
import { useFetch } from "../../hooks/useFetch";
import { CountriesCard } from "../CountriesCard";
import { FilterOption } from "../FilterOption";
import { SearchInput } from "../SearchInput";
import { Container, DisplayCardsContainer, SearchFieldsContainer } from "./style";

export function CountriesContainer() {
  const { countriesData, error, isFetching } = useFetch(baseURL)
  const {renderInput, searchName} = SearchInput()
  const {renderFilterByRegion} = FilterOption()
  return (
    <Container>
      <SearchFieldsContainer>
        {renderInput}
        {renderFilterByRegion}
      </SearchFieldsContainer>
      <DisplayCardsContainer>
      {isFetching ? 
        <h1>Loading</h1> 
        : countriesData.filter(country => {
          return country.name.common.toLowerCase().includes(searchName.toLowerCase())
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
          })
      }
      </DisplayCardsContainer>
    </Container>
  )
}