import styled from 'styled-components'

export const Nav = styled.nav`
  background-color: ${props => props.theme.colors.nav};
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -15px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  h1 {
    font-size: 1rem;
    align-self: center;
  }

  @media (max-width: 375px) {
    padding: 1rem;
    h1 {
      font-size: 14px;
    }
  }
`
export const Button = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  img {
    margin-right: 3px;
    width: 1.2rem;
  }

  @media (max-width: 375px) {
    font-size: 12px;
    img {
      width: 14px;
    }
  }
`
