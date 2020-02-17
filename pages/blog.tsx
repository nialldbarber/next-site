import React, { Fragment } from 'react'
import { NextPage } from 'next'
import { useQuery } from '@apollo/react-hooks'
import { GET_POSTS } from 'queries/blog'
import Loading from 'components/loading'
import PostLink from 'components/post-link'
import { Heading } from 'styles/typography/header'

const Blog: NextPage = () => {
  const { loading, error, data } = useQuery(GET_POSTS)
  if (loading) return <Loading />
  if (error) return <p>Error</p>
  const schema = data.posts

  return (
    <div>
      <Heading>Blog</Heading>
      {schema.map(({ id, title }) => (
        <Fragment key={id}>
          <PostLink id={title} uri={id} />
        </Fragment>
      ))}
    </div>
  )
}

export default Blog
