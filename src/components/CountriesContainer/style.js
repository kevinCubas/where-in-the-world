import styled from 'styled-components'

export const Container = styled.section`
  padding: 0 2rem 2rem;
`

export const DisplayCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  row-gap: 3rem;
  column-gap: 1rem;
  @media (max-width: 580px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
export const SearchFieldsContainer = styled.div`
  margin: 2.5rem 0;
  display: flex;
  justify-content: space-between;

  @media (max-width: 580px) {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
`
