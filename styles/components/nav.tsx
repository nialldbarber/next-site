import styled from 'styled-components'

export const Header = styled.header`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  nav {
    ul {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      margin: 0 0 1rem;
      height: 100%;

      li {
        a {
          padding: 1rem;
        }
      }
    }
  }
`

export const LogoWrap = styled.div`
  width: 100px;
  margin: 1rem;

  img {
    width: 100%;
    height: auto;
  }
`
