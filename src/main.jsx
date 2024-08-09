import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//Redux
import { Provider } from 'react-redux'
import ReduxStore from "./Redux Store"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ReduxStore}>
      <App />
    </Provider>
  </React.StrictMode>,
)
