import { useState } from "react"
import {ThemeProvider} from "styled-components"
import {lightMode} from "./styles/themes/lightMode"
import {darkMode} from "./styles/themes/darkMode"
import { Navigation } from "./components/Header"
import { GlobalStyle } from "./styles/GlobalStyle"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
 
  function toggle() {
    setIsDarkMode(theme => !theme)
  }

  return (
    <ThemeProvider theme={isDarkMode ? darkMode : lightMode}>
      <GlobalStyle />
      <div className="App">
        <Navigation click={toggle}/>
      </div>
    </ThemeProvider>
  )
}

export default App
