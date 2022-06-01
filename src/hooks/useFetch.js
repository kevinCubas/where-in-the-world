import { useEffect, useState } from 'react'

export function useFetch(url) {
  const [countriesData, setCountriesData] = useState([])
  const [isFetching, setIsFetching] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCountriesData(data)
      })
      .catch(err => {
        setError(err)
      })
      .finally(() => {
        setIsFetching(false)
      })
  }, [])
  return { countriesData, error, isFetching }
}
