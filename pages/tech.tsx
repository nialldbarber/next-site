import React from 'react'
import { NextPage } from 'next'
import { useQuery } from '@apollo/react-hooks'
import { GET_TECHSTACK } from 'queries/tech'
import Loading from 'components/loading'
import { Heading } from 'styles/typography/header'

const TechPage: NextPage = () => {
  const { loading, error, data } = useQuery(GET_TECHSTACK)
  if (loading) return <Loading />
  if (error) return <p>Error</p>
  const schema = data.pages[0]

  return (
    <div>
      <Heading>{schema.title}</Heading>
      <p>{schema.content}</p>
    </div>
  )
}

export default TechPage
