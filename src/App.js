import Routes from './routes';

import './index.css';
import './bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import { Provider } from 'react-redux';
import store, { persistor } from './store';
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from 'react-toastify';
 
import { Router } from 'react-router-dom';
import history from './services/history';

function App() {
  return (
    <Router history={history}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ToastContainer autoClose={3000}/>
          <Routes />
        </PersistGate>
      </Provider>
    </Router>
    );
}

export default App;
