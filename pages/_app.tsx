import withApollo from 'next-with-apollo'
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { ThemeProvider } from 'styled-components'
import { AnimatePresence } from 'framer-motion'
import Page from 'layout/page'
import { theme } from 'styles/utils/variables'
import GlobalFonts from 'styles/utils/base'

const App = ({ Component, pageProps, router, apollo }) => (
  <ApolloProvider client={apollo}>
    <ThemeProvider theme={theme}>
      <AnimatePresence exitBeforeEnter>
        <Page>
          <GlobalFonts />
          <Component {...pageProps} key={router.route} />
        </Page>
      </AnimatePresence>
    </ThemeProvider>
  </ApolloProvider>
)

export default withApollo(({ initialState }) => {
  return new ApolloClient({
    uri: process.env.URI,
    cache: new InMemoryCache().restore(initialState || {}),
  })
})(App)
