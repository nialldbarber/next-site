import React, { FC } from 'react'
import { useQuery } from '@apollo/react-hooks'
import ReactMarkdown from 'react-markdown'
import { GET_INDIVIDUAL_POST } from 'queries/blog-post'
import Loading from 'components/loading'

// import Breadcrums from '~/components/breadcrums'

// import { BlogHeader } from 'styles/components/header'
// import { BlogContent } from 'styles/components/content'

// import { Props } from '~/components/post/types'

const Post: FC = ({ match }) => {
  const { loading, error, data } = useQuery(GET_INDIVIDUAL_POST, {
    variables: { id: match.params.id },
  })
  if (loading) return <Loading />
  if (error) return <p>Error</p>

  const { title, description } = data.post

  return (
    <div className="container">
      {/* <Breadcrums /> */}
      <h1>{title}</h1>
      <div className="content">
        <ReactMarkdown source={description} />
      </div>
    </div>
  )
}

export default Post
