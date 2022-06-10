import { Nav, Button } from "./style";
import { ThemeContext } from "styled-components"
import { useContext } from "react";
import {Link} from "react-router-dom"

export function Navigation({ click }) {
  const { icon, displayTitle } = useContext(ThemeContext)
  return (
    <Nav>
      <h1><Link to={"/"}>Where in the World?</Link></h1>
      <Button onClick={() => click()} ><i className="material-symbols-outlined">{icon}</i>{displayTitle}</Button>
    </Nav>
  )
}