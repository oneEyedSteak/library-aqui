import Header from './Header';

const Layout = ({ children }) => (
  <div className="content">
    <Header />
    { children }

  </div>
);

export default Layout;
