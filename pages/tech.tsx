import React from 'react'
import { NextPage } from 'next'
import { useQuery } from '@apollo/react-hooks'
import { GET_TECHSTACK } from 'queries/tech'
import Loading from 'components/loading'

const TechPage: NextPage = () => {
  const { loading, error, data } = useQuery(GET_TECHSTACK)
  if (loading) return <Loading />
  if (error) return <p>Error</p>
  const schema = data.pages[0]

  console.log(schema)

  return (
    <div>
      <h1>{schema.title}</h1>
      <p>{schema.content}</p>
    </div>
  )
}

export default TechPage
