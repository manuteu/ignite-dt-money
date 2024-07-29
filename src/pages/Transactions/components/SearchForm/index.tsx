import React from 'react'
import { SearchFormContainer } from './styles'
import { MagnifyingGlass } from '@phosphor-icons/react'

export default function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder='Busque por transações' />

      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
