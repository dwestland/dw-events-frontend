import { AuthProvider } from '@/context/AuthContext'
import '../styles/globals.css'

// The contents _app will be added to every page:

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
