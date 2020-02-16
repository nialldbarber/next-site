import React, { Fragment } from 'react'
import Link from 'next/link'
import { NextPage } from 'next'
import { useQuery } from '@apollo/react-hooks'
import { GET_POSTS } from 'queries/blog'
import Loading from 'components/loading'

const PostLink = ({ uri, id }) => (
  <li>
    <Link href="/posts/[id]" as={`/posts/${uri}`}>
      <a>{id}</a>
    </Link>
  </li>
)

const Blog: NextPage = () => {
  const { loading, error, data } = useQuery(GET_POSTS)
  if (loading) return <Loading />
  if (error) return <p>Error</p>
  const schema = data.posts

  return (
    <div>
      <h1>Blog</h1>
      {schema.map(({ id, title }) => (
        <Fragment key={id}>
          <PostLink id={title} uri={id} />
        </Fragment>
      ))}
    </div>
  )
}

export default Blog
