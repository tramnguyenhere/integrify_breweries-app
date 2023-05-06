import React from 'react'

import CompanyListWithLoading from './components/CompanyList/CompanyList'
import Header from './components/Header/Header'
import SearchListWithLoading from './components/SearchBar/SearchBar'

const App = () => {
  return (
    <>
      <Header />
      <CompanyListWithLoading />
    </>
  )
}

export default App