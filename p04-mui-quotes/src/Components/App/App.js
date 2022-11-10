import { Container } from '@mui/system';
import Providers from "../Providers"
import { Quotes } from '../Quote';
import Footer from './Footer';
import Header from './Header';
import configData from "./Configs/config.js";
function App() {
  return (
    <Providers>
      <Header />
      <Quotes />
      <Footer />
    </Providers>
  );
}

export default App;
