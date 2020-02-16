import React, { Fragment, FC } from 'react'
import SiteHead from 'components/head'
import Nav from 'components/nav'
import PageContainer from 'layout/page-container'

const Page: FC = ({ children }) => (
  <Fragment>
    <SiteHead />
    <Nav />
    <PageContainer>{children}</PageContainer>
  </Fragment>
)

export default Page
