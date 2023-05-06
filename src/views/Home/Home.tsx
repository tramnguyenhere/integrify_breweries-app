import React from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import CompanyListWithLoading from '../../components/CompanyList/CompanyList'
import Header from '../../components/Header/Header'

const Home = () => {
  return (
    <>  
      <CompanyListWithLoading />
    </>
  )
}

export default Home