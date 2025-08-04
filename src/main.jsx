import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import allReducers from './client/reducers/index.jsx'

const store = createStore(allReducers)
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
