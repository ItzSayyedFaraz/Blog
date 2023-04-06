import '@blog/styles/globals.css'
import Header from '@blog/components/Header'
import Footer from '@blog/components/Footer'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
// import { SSRProvider } from 'react-bootstrap'
config.autoAddCss = false


export default function App({ Component, pageProps }) {
 return (
  <>
 {/* <SSRProvider/> */}
 <Header/>
 <Component {...pageProps} />
 <Footer/>
 {/* <SSRProvider/> */}
 </>
 )
}
