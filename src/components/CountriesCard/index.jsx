import { Link } from "react-router-dom";
import { CountryCard, CountryInfo, FlagContainer } from "./style";

export function CountriesCard(props) { 
  const {id, name, flags, population, region, capital} = props 
  return (
    <CountryCard key={id}>
      <Link to={`/${name}`}>
        <FlagContainer>
          <img src={flags} alt={name + "country flag"} loading="lazy"/>
        </FlagContainer>
        <CountryInfo>
          <h2>{name}</h2>
          <ul>
            <li><b>Population:</b> {population.toLocaleString('pt-BR')} </li>
            <li><b>Region:</b> {region}</li>
            <li><b>Capital:</b> {capital ? capital : "No information"}</li>
          </ul>
        </CountryInfo>
      </Link>
    </CountryCard>      
  )
}