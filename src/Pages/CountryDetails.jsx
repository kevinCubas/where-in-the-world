import { useParams } from "react-router-dom";
import { Details } from "../components/Details";
import { useFetch } from "../hooks/useFetch";
import {baseURL} from "../baseURL"

export function CountryDetails() {
  const {countryname} = useParams()
  const {countriesData, error, isFetching} = useFetch(`${baseURL}/name/${countryname}?fullText=true`)
  return (
    <>
    {isFetching && <h1 style={{display: "flex", justifyContent: "center"}}>Loading...</h1>}
    { error && <p>{error}</p>}
    {!isFetching && 
    countriesData?.map((country) => {
      const {name, 
        nativeName, 
        flags, 
        population, 
        region, 
        capital, 
        subregion, 
        topLevelDomain,
      } = country
      let languagesArr = []
      let currenciesArr = []
      let bordersArr = []

      country.languages?.forEach(language => {
        languagesArr.push(language.name)
      })
      country.currencies?.forEach(currency => {
        currenciesArr.push(currency.name)
      })
      country.borders?.forEach(border => {
        bordersArr.push(border)
      })
      return (
        <Details 
        key={name} 
        flag={flags.svg} 
        officialName={name} 
        native={nativeName} 
        population={population}
        region={region}
        subRegion={subregion}
        capital={capital}
        topleveldomain={topLevelDomain}
        currencies={currenciesArr}
        languages={languagesArr}
        borders={bordersArr}
        />
      )
    })}
    
    </>
  )
}