import './App.css';
import Main from './components/MainComponent';
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

// changing from function to class component
// function App() {

const store = ConfigureStore();

class App extends Component {

  render() {
    return (
      // by wrapping this wilth provide and passing store as pros
      // store will become available to all the component
      <Provider store={store}>
        {/* // this will make use of react router */}
        <BrowserRouter>
          <div>
            <Main />
          </div >
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
