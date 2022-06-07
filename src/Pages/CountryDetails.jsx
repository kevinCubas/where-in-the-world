import { useNavigate, useParams } from "react-router-dom";
import { Details } from "../components/Details";
import { useFetch } from "../hooks/useFetch";
import {baseURL} from "../baseURL"

export function CountryDetails() {
  const {countryname} = useParams()
  const {countriesData, error, isFetching} = useFetch(`${baseURL}/name/${countryname}?fullText=true`)
  const navigate = useNavigate();
  return (
    <>
    <button onClick={() => navigate("/")}>back</button>
    {isFetching ? <h1>loading</h1> : 
    countriesData.map(country => {
      const {name, 
        nativeName, 
        flags, 
        population, 
        region, 
        capital, 
        subregion, 
        topLevelDomain,
        currencies,
        languages} = country
      return (
        <Details 
        key={name} 
        flag={flags.svg} 
        officialName={name} 
        native={nativeName} 
        population={population}
        region={region}
        capital={capital}
        subRegion={subregion}
        topleveldomain={topLevelDomain}
        />
      )
    })}
    
    </>
  )
}