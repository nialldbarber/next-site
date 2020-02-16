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

  h1 {
    font-family: 'AirbnbCerealBlack';
  }
`;
