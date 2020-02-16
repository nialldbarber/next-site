import React from 'react'
import { NextPage } from 'next'
import { useQuery } from '@apollo/react-hooks'
import { GET_HOME } from 'queries/home'
import Loading from 'components/loading'

const Home: NextPage = () => {
  const { loading, error, data } = useQuery(GET_HOME)
  if (loading) return <Loading />
  if (error) return <p>Error</p>
  const schema = data.pages[0]

  return (
    <div>
      <h1>{schema.title}</h1>
      <p>{schema.content}</p>
    </div>
  )
}

export default Home
