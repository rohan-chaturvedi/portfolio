import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Space_Grotesk} from '@next/font/google'

const space_grotesk = Space_Grotesk({
  weight: ['300','400','500', '600', '700',],
  subsets: ["latin"],
  variable: '--font-space_grotesk'
})

export default function App({ Component, pageProps }: AppProps) {
  return(
    //TODO: Use Next/font istean of global.css
    <div className={`${space_grotesk.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  )
}
