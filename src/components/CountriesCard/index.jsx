import { Link } from "react-router-dom";
import { CountryCard, CountryInfo, FlagContainer } from "./style";

export function CountriesCard(props) { 
  const {id, name, flags, population, region, capital} = props 
  return (
    <CountryCard key={id}>
      <Link to={`/details/${name}`}>
        <FlagContainer>
          <img src={flags} alt={name + "country flag"} loading="lazy"/>
        </FlagContainer>
        <CountryInfo>
          <h2>{name}</h2>
          <ul>
            <li>Population: <span>{population.toLocaleString('pt-BR')}</span></li>
            <li>Region: <span>{region}</span></li>
            <li>Capital: <span>{capital ? capital : "No information"}</span></li>
          </ul>
        </CountryInfo>
      </Link>
    </CountryCard>      
  )
}