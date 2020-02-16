import React from 'react'
import SiteHead from 'components/head'
import Nav from 'components/nav'

const Page = ({ children }) => {
  return (
    <>
      <SiteHead />
      <Nav />
      {children}
    </>
  )
}

export default Page
