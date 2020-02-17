import React, { FC } from 'react'
import Link from 'next/link'
import { Props } from 'components/post-link/types'

const PostLink: FC<Props> = ({ uri, id }) => (
  <li>
    <Link href="/posts/[id]" as={`/posts/${uri}`}>
      <a>{id}</a>
    </Link>
  </li>
)

export default PostLink
