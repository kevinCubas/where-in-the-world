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
 } = props
  return (
    <div>
      <h1>{officialName}</h1>
      <img width="300px" src={flag} alt={`${officialName} flag`} />
      <h2>Native Name: {native}</h2>
      <p>Population: {population.toLocaleString('pt-BR')}</p>
      <p>Region: {region}</p>
      <p>Sub Region: {subRegion}</p>
      <p>Capital: {capital}</p>
      <p>Top Level Domain: {topleveldomain}</p>    
    </div>
  )
}