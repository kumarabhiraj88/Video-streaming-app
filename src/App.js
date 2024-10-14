import './App.css';
import Head from './components/Head';
import { Provider } from 'react-redux';
import store from './utils/store';
import appRouter from './routes/router';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <Provider store={store} >
    <div className="App">
      <Head />
      <RouterProvider router={appRouter} />
    </div>
    </Provider>
  )
}

export default App;
