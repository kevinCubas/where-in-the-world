import styled from 'styled-components'

export const CountryCard = styled.div`
  width: 250px;
  font-size: 14px;
  background-color: ${({ theme }) => theme.colors.nav};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  @media (max-width: 375px) {
    width: 200px;
    font-size: 12px;
  }
`
export const FlagContainer = styled.div`
  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }
`

export const CountryInfo = styled.div`
  padding: 1rem;

  h2 {
    font-size: 1rem;
  }

  ul {
    padding-top: 0.25rem;
    list-style: none;
  }
`
