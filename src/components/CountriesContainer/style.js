import styled from 'styled-components'

export const Container = styled.section`
  padding: 1rem 0 3rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  row-gap: 3rem;
  column-gap: 2rem;

  @media (max-width: 580px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
