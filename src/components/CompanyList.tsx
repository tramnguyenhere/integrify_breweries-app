import React from 'react'
import withLoading from './withLoading'
import { Company } from '../types/Company'

interface CompanyListProps {
  data: Company[]
}

const CompanyList = ({data} : CompanyListProps) => {
  return (
      <div>
          {data.map(
              (item: Company) => (<p key={item.id}>{item.name}</p>)
          )}
    </div>
  )
}

const CompanyListWithLoading = withLoading(CompanyList, "https://api.openbrewerydb.org/v1/breweries")

export default CompanyListWithLoading