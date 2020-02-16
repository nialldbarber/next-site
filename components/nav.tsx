import React from 'react'
import Link from 'next/link'
import { pages } from 'utils/site-data'

const Nav = () => (
  <nav>
    <ul>
      {pages.map(({ id, title, path }) => (
        <li key={id}>
          <Link href={path}>
            <a>
              {title}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)

export default Nav