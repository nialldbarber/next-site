import withApollo from 'next-with-apollo'
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import Page from 'layout/page'
import GlobalFonts from 'styles/utils/font'

const App = ({ Component, pageProps, apollo }) => (
  <ApolloProvider client={apollo}>
    <Page>
      <GlobalFonts />
      <Component {...pageProps} />
    </Page>
  </ApolloProvider>
)

export default withApollo(({ initialState }) => {
  return new ApolloClient({
    uri: process.env.URI,
    cache: new InMemoryCache().restore(initialState || {})
  })
})(App)
