import '../styles/globals.css';
// import SSRProvider from "react-bootstrap/SSRProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from '../component/Layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;
