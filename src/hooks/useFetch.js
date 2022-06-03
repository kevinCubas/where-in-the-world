import { useEffect, useState } from 'react'
import { FilterOption } from '../components/FilterOption'

export function useFetch(url) {
  const [countriesData, setCountriesData] = useState([])
  const [isFetching, setIsFetching] = useState(true)
  const [error, setError] = useState(null)
  const { selectedRegion } = FilterOption()
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
