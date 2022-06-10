import styled from 'styled-components'

export const CountryDetail = styled.div`
  margin: 0 2rem;
  span {
    color: ${({ theme }) => theme.colors.spanText};
  }
  @media (min-width: 915px) {
    display: flex;
    gap: 5rem;
  }
`
export const ImageAndBackButtonContainer = styled.div`
  margin: 3rem 0 0;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    object-fit: cover;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  @media (min-width: 550px) {
    img {
      width: 80%;
    }
  }
  @media (min-width: 850px) {
    img {
      width: 600px;
    }
  }
`
export const DetailsContainer = styled.div`
  h2 {
    font-size: 1rem;
    margin: 2rem 0 1rem;
  }

  p {
    line-height: 2;
    font-size: 12px;
  }

  @media (min-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    h2 {
      font-size: 1.5rem;
      margin: 1rem 0 1rem;
    }
    p {
      font-size: 14px;
    }
  }
`
export const InformationContainer = styled.div`
  @media (min-width: 490px) {
    display: flex;
    gap: 5rem;
  }
`

export const PrincipalInformation = styled.div`
  @media (min-width: 490px) {
    margin: 0;
  }
`

export const OtherInformation = styled.div``

export const BorderContainer = styled.div`
  margin: 1rem 0 2rem;
`

export const Border = styled.span`
  margin-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  button {
    font-size: 10px;
  }
  @media (min-width: 600px) {
    align-items: flex-end;
  }
`
export const Button = styled.button`
  margin-bottom: 3rem;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.nav};
  color: ${({ theme }) => theme.colors.spanText};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  outline: none;
  border: none;
  padding: 0.25rem 1rem;
  width: fit-content;
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
  i {
    margin-right: 3px;
    font-size: 1rem;
  }
`
