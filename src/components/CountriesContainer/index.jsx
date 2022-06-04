import { useEffect, useState } from "react";
import { baseURL } from "../../baseURL";
import { useFetch } from "../../hooks/useFetch";
import { CountriesCard } from "../CountriesCard";
import { FilterOption } from "../FilterOption";
import { SearchInput } from "../SearchInput";
import { Container, DisplayCardsContainer, SearchFieldsContainer } from "./style";

export function CountriesContainer() {
  const { countriesData, error, isFetching } = useFetch(baseURL)
  const {renderFilterByRegion, selectedRegion} = FilterOption()
  const {renderInput, searchName} = SearchInput()
  const [countries, setCountries] = useState()

  async function filterCountries(arr) {
    if(selectedRegion === "" || selectedRegion === "All") {
      setCountries(arr)
  } else {
      const countryByRegion = arr.filter(country => country.region.includes(selectedRegion))
      setCountries(countryByRegion)
    }
  }

  useEffect(() => {
    filterCountries(countriesData)
  }, [countriesData, selectedRegion])
  return (
    <Container>
      <SearchFieldsContainer>
        {renderInput}
        {renderFilterByRegion}
      </SearchFieldsContainer>
      <DisplayCardsContainer>
      {isFetching ? 
        <h1>Loading</h1> 
        : countries.filter(country => {
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