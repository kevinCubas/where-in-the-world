import { CountryCard, CountryInfo, FlagContainer } from "./style";

export function CountriesCard({ id, name, flags, population, region, capital }) {  
  return (
    <CountryCard key={id}>
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
    </CountryCard>      
  )
}