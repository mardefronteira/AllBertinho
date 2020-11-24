import Routes from './routes';

import './index.css';
import './bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
    <ToastContainer autoClose={3000}/>
    <Routes />
    </>
    );
}

export default App;
