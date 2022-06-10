import { Routes, Route, useNavigate } from 'react-router-dom'
import { Button } from './components/Details/style'
import { CountryDetails } from './Pages/CountryDetails'
import { Home } from './Pages/Home'

export default function MainRoutes() {
  const navigate = useNavigate()
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:countryname" element={<CountryDetails />} />
      <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <Button className="backButton" onClick={() => navigate("/")}>
          <i className="material-symbols-outlined">arrow_back</i>Back</Button>
          <p>There's nothing here!</p>
        </main>
      }
    />
    </Routes>
  )
}
