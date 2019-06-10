import React from 'react'
import { Provider } from 'react-redux'
import store from './reducer'
import App from './App';

class AppContainer extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

export default AppContainer

