import { Nav, Button } from "./style";
import { ThemeContext } from "styled-components"
import { useContext } from "react";

export function Navigation({ click }) {
  const { icon, displayTitle } = useContext(ThemeContext)
  return (
    <Nav>
      <h1>Where in the World?</h1>
      <Button onClick={() => click()} ><img src={icon} alt="Icon" />{displayTitle}</Button>
    </Nav>
  )
}