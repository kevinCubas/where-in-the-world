import { useEffect, useState } from 'react'

export function useFetch(url) {
  const [countriesData, setCountriesData] = useState([])
  const [isFetching, setIsFetching] = useState(true)
  const [error, setError] = useState(null)
  const callAPI = async () => {
    try {
      const response = await fetch(url)
      if (!response.ok)
        throw new Error(
          `Something went wrong: ${response.status} ${response.statusText}`
        )
      const data = await response.json()
      setCountriesData(data)
      setIsFetching(false)
    } catch (err) {
      setError(err.message)
      setIsFetching(false)
    }
  }
  useEffect(() => {
    callAPI()
  }, [])
  return { countriesData, error, isFetching }
}
