import React from 'react'

import withLoading from '../withLoading'
import { Company } from '../../types/Company'

import { List, ListItem, ListItemButton } from '@mui/material'
import './CompanyList.scss'

interface CompanyListProps {
  data: Company[]
}

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