import '@/styles/globals.css'

import Layout from '../components/Layout/index'
import { store } from './store'
import { Provider } from 'react-redux'
import { ContextProvider } from '@/context'


export default function App({ Component, pageProps }) {



  return (
    <Provider store={store}>
      <ContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ContextProvider>

    </Provider>
  )
}
