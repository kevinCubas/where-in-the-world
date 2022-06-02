import styled from 'styled-components'

export const InputContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.nav};
  width: 40%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 0.9rem;
  gap: 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  i {
    font-size: 1.2rem;
  }
  @media (max-width: 580px) {
    width: 100%;
  }
  @media (max-width: 375px) {
  }
`

export const InputSearch = styled.input.attrs({
  id: 'search-input',
  name: 'search input',
  type: 'text',
  placeholder: 'Search for a country...'
})`
  background-color: transparent;
  outline: none;
  border: none;
  font-size: 14px;
  width: 100%;
  color: ${({ theme }) => theme.colors.text};
  ::placeholder {
    color: ${({ theme }) => theme.colors.text};
  }
`
