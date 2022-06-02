import { Nav, Button } from "./style";
import { ThemeContext } from "styled-components"
import { useContext } from "react";

export function Navigation({ click }) {
  const { icon, displayTitle } = useContext(ThemeContext)
  return (
    <Nav>
      <h1>Where in the World?</h1>
      <Button onClick={() => click()} ><i className="material-symbols-outlined">{icon}</i>{displayTitle}</Button>
    </Nav>
  )
}