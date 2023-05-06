import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Card } from '@mui/material'

import { Company } from '../../types/Company'
import './CompanyDetails.scss'
import CardDetail from '../../components/CardDetail/CardDetail'
import BackToHomeLink from '../../components/BackToHomeLink/BackToHomeLink'

const CompanyDetails = () => {
  const { id } = useParams()
  const [company, setCompany] = useState<Company | undefined>()

  useEffect(() => {
      fetch(`https://api.openbrewerydb.org/v1/breweries/${id}`)
          .then(
              data => data.json()
          ).then(
            data => {
              setCompany(data)
            }
          )
  }, [id])

  const companyType = company?.brewery_type
  const companyPhone = company?.phone
  const companyName = company?.name
  const companyWebsite = company?.website_url
  const companyAddress = `${company?.address_1}, ${company?.city}, ${company?.postal_code}, ${company?.state_province}, ${company?.state}, ${company?.country}`
  const companyGoogleMap =`https://www.google.com/maps/search/?api=1&query=${company?.latitude},${company?.longitude}`

  return (
    <Card className='card-details'>
      <h5 className='card-details__name'>{companyName}</h5>
      <div className='card-details__info-group'>
        <CardDetail cardDetailContent={companyType} cardDetailHeader='Brewery type: ' isLink={false} />
        <CardDetail cardDetailContent={companyAddress} cardDetailHeader='Address: ' isLink={false} />
        <CardDetail cardDetailContent='Get direction' cardDetailHeader='Google Map: ' isLink={true} cardDetailLink={companyGoogleMap} />
        <CardDetail cardDetailContent={companyPhone} cardDetailHeader='Phone: ' isLink={true} cardDetailLink={`tel:${companyPhone}`} />
        <CardDetail cardDetailContent={companyWebsite} cardDetailHeader='Website: ' isLink={true} cardDetailLink={companyWebsite} />
      </div>
      <BackToHomeLink />
    </Card>
  )
}


export default CompanyDetails