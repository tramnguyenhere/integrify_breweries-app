import React from 'react'
import {Autocomplete, TextField} from '@mui/material'
import withLoading from '../withLoading'
import { CompanyListProps } from '../../types/Company'

const SearchBar = ({data}: CompanyListProps) => {
  return (
      <>
        <Autocomplete
          id="search-brewery-companies"
          freeSolo
          disableClearable
          options={data.map((option) => option.name)}
          renderInput={(params) =>
            <TextField {...params}
              label="Search Brewery Companies"
              InputProps={{
                ...params.InputProps,
                type: 'search',
              }}
            />}
        />
      </>
  )
}

const SearchListWithLoading = withLoading(SearchBar, "https://api.openbrewerydb.org/v1/breweries")

export default SearchListWithLoading