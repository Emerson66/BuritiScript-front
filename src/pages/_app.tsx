import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import Head from 'next/head'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <Header/>     
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
