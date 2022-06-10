import { useNavigate } from "react-router-dom";
import { Button, 
  Border, 
  BorderContainer, 
  CountryDetail, 
  DetailsContainer, 
  ImageAndBackButtonContainer, 
  InformationContainer, 
  OtherInformation, 
  PrincipalInformation } from "./style"

export function Details(props) {
  const {
  officialName, 
  native, 
  population,
  region,
  capital,
  flag,
  subRegion, 
  topleveldomain,
  currencies,
  languages,
  borders
 } = props

 const navigate = useNavigate();

  return (
    <CountryDetail>
      <ImageAndBackButtonContainer>      
        <Button className="backButton" onClick={() => navigate("/")}>
        <i className="material-symbols-outlined">arrow_back</i>Back</Button>
        <img src={flag} alt={`${officialName} flag`} />
      </ImageAndBackButtonContainer>
      <DetailsContainer>
        <h2>{officialName}</h2>
        <InformationContainer>
          <PrincipalInformation>
            <p>Native Name: <span>{native}</span></p>
            <p>Population: <span>{population.toLocaleString('pt-BR')}</span></p>
            <p>Region: <span>{region}</span></p>
            <p>Sub Region: <span>{subRegion}</span></p>
            <p>Capital: <span>{capital ? capital : "No Capital"}</span></p>
          </PrincipalInformation>
          <OtherInformation>
            <p>Top Level Domain: <span>{topleveldomain}</span></p>
            {currencies.length > 0 ? (
            <p>Currencies:
              {currencies.map(currency => {
                if(currencies.indexOf(currency) !== currencies.length -1) {
                  return (
                    <span key={currency}> {currency},</span>
                  )
                } else if(currencies.length < 0) {
                  <span>No currency</span>
                } else {
                  return (
                    <span key={currency}> {currency}</span>
                  )
                }
              })}
            </p>
            ) : <p>Currencies : <span>No currency</span></p>
            }
            <p> Languages:
              {languages.map(language => {
                if(languages.indexOf(language) !== languages.length -1) {
                  return (
                    <span key={language}> {language},</span>
                  )
                } else {
                  return (
                    <span key={language}> {language}</span>
                  )
                }
              })}
            </p>
          </OtherInformation>
        </InformationContainer>
        <BorderContainer>
          {borders.length > 0 ? (
            <p>Border Countries: <Border>{borders.map(border => <Button style={{cursor:"auto"}} as="span" key={border}>{border}</Button>)}</Border></p>
          ) : <p>Border Countries: None</p>
          }
        </BorderContainer>
      </DetailsContainer>
    </CountryDetail>
  )
}