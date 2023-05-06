import React from 'react'
import { Input} from '@mui/material'

import './SearchBar.scss'

const SearchBar = ({handleInputChange}: any) => {
  return (
    <Input className='search-bar' fullWidth placeholder='Search companies' onChange={handleInputChange} />
  )
}

export default SearchBar