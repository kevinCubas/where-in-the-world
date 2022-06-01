import { baseURL } from "../../baseURL";
import { useFetch } from "../../hooks/useFetch";
import { CountriesCard } from "../CountriesCard";
import { Container } from "./style";

export function CountriesContainer() {
  const { countriesData, error, isFetching } = useFetch(baseURL)
  return (
    <Container>
          {countriesData.map((country) => {
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
    </Container>
  )

}