import React, { Fragment, FC } from 'react'
import { Container } from 'styles/layout/container'

const PageContainer: FC = ({ children }) => (
  <Container>
    <div>{children}</div>
  </Container>
)

export default PageContainer
