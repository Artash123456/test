import { ErrorBoundary } from 'components';
import { Routing } from 'pages';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'redux/reducers';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Provider store={store}>
          <Routing />
        </Provider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
