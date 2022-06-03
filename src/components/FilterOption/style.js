import styled from 'styled-components'
import Select from 'react-select'

export const SelectFiltered = styled(Select)`
  .Select__input-container {
    color: ${({ theme }) => theme.colors.text};
  }
  .Select__single-value {
    color: ${({ theme }) => theme.colors.text};
  }
  .Select__control {
    background-color: ${({ theme }) => theme.colors.nav};
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    outline: none;
    border: none;
    border-radius: 5px;
    width: 230px;
    padding: 0.9rem;
    cursor: pointer;
  }
  .Select__indicator-separator {
    display: none;
  }
  .Select__menu {
    background-color: ${({ theme }) => theme.colors.nav};
    color: ${({ theme }) => theme.colors.text};
    border-radius: 5px;
  }

  .Select__placeholder {
    color: ${({ theme }) => theme.colors.text};
  }
  .Select__option {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.colors.background};
    }
  }

  .Select__placeholder {
    color: ${({ theme }) => theme.colors.text};
  }
`
