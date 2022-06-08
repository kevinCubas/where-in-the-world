import { useEffect, useState } from "react";
import { baseURL } from "../../baseURL";
import { useFetch } from "../../hooks/useFetch";
import { CountriesCard } from "../CountriesCard";
import { FilterOption } from "../FilterOption";
import { SearchInput } from "../SearchInput";
import { Container, DisplayCardsContainer, SearchFieldsContainer } from "./style";

export function CountriesContainer() {
  const { countriesData, error, isFetching } = useFetch(`${baseURL}/all`)
  const {renderFilterByRegion, selectedRegion} = FilterOption()
  const {renderInput, searchName} = SearchInput()
  const [countries, setCountries] = useState(() => [])

  function filterCountries(arr) {
    if(selectedRegion === "" || selectedRegion === "All") {
      setCountries(arr)
  } else {
      const countryByRegion = arr.filter(country => country.region.includes(selectedRegion))
      setCountries(countryByRegion)
    }
  }

  useEffect(() => {
    filterCountries(countriesData)
  }, [isFetching, selectedRegion])
  return (
    <Container>
      <SearchFieldsContainer>
        {renderInput}
        {renderFilterByRegion}
      </SearchFieldsContainer>
      <DisplayCardsContainer>
      {isFetching && 
        <h1 style={{display: "flex", justifyContent: "center"}}>Loading...</h1> 
      }
      {error && <h2>{error}</h2>}
        {!isFetching && countries?.filter(country => {
          return country.name.toLowerCase().includes(searchName.toLowerCase())
        }).map((country) => {
          const {name, flags, population, region, capital} = country
          return (
              <CountriesCard key={name}
                id={name}
                name={name}
                flags={flags.svg}
                population={population}
                region={region}
                capital={capital}
              />
            )
          })
      }
      </DisplayCardsContainer>
    </Container>
  )
}