import React, { FC } from 'react'
import Link from 'next/link'
import { pages } from 'utils/site-data'
import { Header, LogoWrap } from 'styles/components/nav'

const Nav: FC = () => (
  <Header>
    <LogoWrap>
      <Link href="/">
        <a>
          <img src="/images/logo.svg" alt="Logo" />
        </a>
      </Link>
    </LogoWrap>
    <nav>
      <ul>
        {pages.map(({ id, title, path }) => (
          <li key={id}>
            <Link href={path}>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </Header>
)

export default Nav
