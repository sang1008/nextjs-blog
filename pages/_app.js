import '../styles/index.css'
import '../styles/theme.css'
import SideBar from '../components/SideBar'

function MyApp({ Component, pageProps }) {
  return (
    <div className='flex flex-grow h-screen'>
      <SideBar/>
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  )
}

export default MyApp
