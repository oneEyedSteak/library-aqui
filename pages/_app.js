import '../styles/globals.css';
import Layout from '../components/Layout';
import 'tailwindcss/tailwind.css';
import { Provider } from 'next-auth/client';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Layout />
      <Component {...pageProps} />
      <ToastContainer />
    </Provider>
  );
}

export default MyApp;
