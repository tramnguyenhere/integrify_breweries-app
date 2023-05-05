import React from 'react'
import CompanyListWithLoading from './components/CompanyList/CompanyList'
import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
import SearchListWithLoading from './components/SearchBar/SearchBar'


const App = () => {
  return (
    <>
      <Header />
      <SearchListWithLoading />
      <CompanyListWithLoading />
    </>
  )
}

export default App