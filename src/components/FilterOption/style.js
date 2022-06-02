import styled from 'styled-components'

export const Filter = styled.select`
  background-color: ${({ theme }) => theme.colors.nav};
  color: ${({ theme }) => theme.colors.text};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 230px;
  padding: 0.9rem;
`

export const Option = styled.option`
  background-color: transparent;
  outline: none;
  border: none;
`
