import React, {useState, useEffect} from 'react'
import { List, ListItem } from '@mui/material'
import {Link} from 'react-router-dom'

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
            <Link className='item__button' to={item.id}>More details</Link>
          </ListItem>
        ))}
        </List>
    </>
  )
}

const CompanyListWithLoading = withLoading(CompanyList, "https://api.openbrewerydb.org/v1/breweries")

export default CompanyListWithLoading