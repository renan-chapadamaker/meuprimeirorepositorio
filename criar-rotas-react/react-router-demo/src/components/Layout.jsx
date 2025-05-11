import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <Sidebar />
        <main>{children}</main>
        <div className="container">
          <Outlet />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default Layout;