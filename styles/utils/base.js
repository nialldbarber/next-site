import { createGlobalStyle } from 'styled-components'

import AirbnbCerealBlack from 'styles/font/AirbnbCereal-Black.ttf'
import AirbnbCerealBold from 'styles/font/AirbnbCereal-Bold.ttf'
import AirbnbCerealBook from 'styles/font/AirbnbCereal-Book.ttf'
import AirbnbCerealExtraBold from 'styles/font/AirbnbCereal-ExtraBold.ttf'
import AirbnbCerealLight from 'styles/font/AirbnbCereal-Light.ttf'
import AirbnbCerealMedium from 'styles/font/AirbnbCereal-Medium.ttf'

export default createGlobalStyle`
  @font-face {
    font-family: 'AirbnbCerealBlack';
    src: url(${AirbnbCerealBlack});
  }

  @font-face {
    font-family: 'AirbnbCerealMedium';
    src: url(${AirbnbCerealMedium});
  }

  * {
    box-sizing: inherit;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;

    &:before, 
    &:after {
      box-sizing: inherit;
    }
  }

  html {
    box-sizing: border-box;
    line-height: 1.15;
  }

  body {
    position: relative;
    margin: 0;
    padding: 0;
    font-family: ${props => props.theme.mainFont};
    background-color: ${props => props.theme.black};
    color:  ${props => props.theme.white};
  }

  h1 {
    font-family: ${props => props.theme.boldFont};
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.white};
  }

  ul {
    padding: 0;

    li {
      list-style: none;
    }
  }
`
