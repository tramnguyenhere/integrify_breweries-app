import React, {useState, useEffect} from 'react'
import { List, ListItem } from '@mui/material'

import withLoading from '../withLoading'
import { Company } from '../../types/Company'
import './CompanyList.scss'
import SearchBar from '../SearchBar/SearchBar'

const CompanyList = ({ data }: any) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setSearchResults(data.filter((result: Company) => result.name.toLowerCase().includes(searchTerm)))
    }, 500);

    return () => clearTimeout(delayDebounceFn)
  }, [data, searchTerm])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  return (
    <>
      <SearchBar handleInputChange={handleInputChange} />
      <List className='list'>
        {searchResults.map((item: Company) => (
          <ListItem key={item.id} className='item'>
            <p className='item__text'>{item.name}</p>
            <button className='item__button'>More details</button>
          </ListItem>
        ))}
        </List>
    </>
  )
}

const CompanyListWithLoading = withLoading(CompanyList, "https://api.openbrewerydb.org/v1/breweries")

export default CompanyListWithLoading