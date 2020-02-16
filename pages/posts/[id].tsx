import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/react-hooks'
import ReactMarkdown from 'react-markdown'
import { GET_INDIVIDUAL_POST } from 'queries/blog-post'
import Loading from 'components/loading'
import CodeBlock from 'components/code-block'

const BlogPost: NextPage = () => {
  const router = useRouter()

  const { loading, error, data } = useQuery(GET_INDIVIDUAL_POST, {
    variables: { id: router.query.id },
  })

  if (loading) return <Loading />
  if (error) return <p>Error</p>

  const schema = data.post

  return (
    <div>
      <h1>{schema.title}</h1>
      <ReactMarkdown source={schema.description} renderers={{ code: CodeBlock }} />
    </div>
  )
}

export default BlogPost
