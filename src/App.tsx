import React from 'react'
import CompanyListWithLoading from './components/CompanyList/CompanyList'
import Header from './components/Header/Header'


const App = () => {
  return (
    <>
      <Header />
      <CompanyListWithLoading />
    </>
  )
}

export default App