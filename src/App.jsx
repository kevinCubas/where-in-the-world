import { useState} from "react"
import { BrowserRouter as Router} from "react-router-dom"
import MainRoutes from "./routes"
import {ThemeProvider} from "styled-components"
import {lightMode} from "./styles/themes/lightMode"
import {darkMode} from "./styles/themes/darkMode"
import { Navigation } from "./components/Header"
import { GlobalStyle } from "./styles/GlobalStyle"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  function toggle() {
    setIsDarkMode(theme => !theme)
  }

  return (
    <ThemeProvider theme={isDarkMode ? darkMode : lightMode}>
      <Router>
        <GlobalStyle />
        <Navigation click={toggle}/>
        <MainRoutes />
      </Router>
    </ThemeProvider>
  )
}

export default App
