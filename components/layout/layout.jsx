import Header from '../navigation/header'
import Sidebar from '../navigation/sidebar'
import Footer from './footer'
import Head from './head'
import Breadcrum from './breadcrum'

const Layout = ({ children, title }) => {
  return (
    <>
      <Head title={title} />
      <Header />
      <div id="app-container" className="app-container">
        <Sidebar />
        <div id="page" className=" page-container ">
          {children}
        </div>
        {/* <Footer /> */}
      </div>
    </>
  )
}

export default Layout
