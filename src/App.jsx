import { useState} from "react"
import {ThemeProvider} from "styled-components"
import {lightMode} from "./styles/themes/lightMode"
import {darkMode} from "./styles/themes/darkMode"
import { Navigation } from "./components/Header"
import { GlobalStyle } from "./styles/GlobalStyle"
import { CountriesContainer } from "./components/CountriesContainer"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  function toggle() {
    setIsDarkMode(theme => !theme)
  }

  return (
    <ThemeProvider theme={isDarkMode ? darkMode : lightMode}>
      <GlobalStyle />
        <Navigation click={toggle}/>
        <CountriesContainer />
    </ThemeProvider>
  )
}

export default App
