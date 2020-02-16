import React from 'react'
import { NextPage } from 'next'
import { useQuery } from '@apollo/react-hooks'
import { GET_POSTS } from 'queries/blog'
import Loading from 'components/loading'
import Post from 'components/post'

const Blog: NextPage = () => {
  const { loading, error, data } = useQuery(GET_POSTS)
  if (loading) return <Loading />
  if (error) return <p>Error</p>
  const schema = data.posts

  console.log(schema)

  return (
    <div>
      <h1>Blog</h1>
      {schema.map(({ id, title, type }) => (
        <p key={id}>{title}</p>
      ))}
    </div>
  )
}

export default Blog
