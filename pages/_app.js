import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Amplify } from "aws-amplify";
import awsExports from "../src/aws-exports";

function MyApp({ Component, pageProps }) {
  Amplify.configure({ ...awsExports, ssr: true });
  return <Component {...pageProps} />
}

export default MyApp
