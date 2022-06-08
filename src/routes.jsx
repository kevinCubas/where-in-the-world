import { Routes, Route } from 'react-router-dom'
import { CountryDetails } from './Pages/CountryDetails'
import { Home } from './Pages/Home'

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:countryname" element={<CountryDetails />} />
    </Routes>
  )
}
