import React from 'react'
import { List, ListItem } from '@mui/material'

import withLoading from '../withLoading'
import { Company, CompanyListProps } from '../../types/Company'
import './CompanyList.scss'

const CompanyList = ({data} : CompanyListProps) => {
  return (
    <List className='list'>
      {data.map((item: Company) => (
        <ListItem key={item.id} className='item'>
          <p className='item__text'>{item.name}</p>
          <button className='item__button'>More details</button>
        </ListItem>
      ))}
    </List>
  )
}

const CompanyListWithLoading = withLoading(CompanyList, "https://api.openbrewerydb.org/v1/breweries")

export default CompanyListWithLoading