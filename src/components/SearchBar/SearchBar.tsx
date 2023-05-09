import React from 'react'
import { Input} from '@mui/material'

import './SearchBar.scss'

interface SearchBarProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchBar = ({handleInputChange}: SearchBarProps) => {
  return (
    <Input className='search-bar' fullWidth placeholder='Search companies' onChange={handleInputChange} />
  )
}

export default SearchBar