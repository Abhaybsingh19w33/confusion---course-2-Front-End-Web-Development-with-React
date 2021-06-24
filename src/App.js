import './App.css';
import Main from './components/MainComponent';
import react, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

// changing from function to class component
// function App() {
class App extends Component {
  render() {
    return (
      // this will make use of react router
      <BrowserRouter>
        <div>
          <Main />
        </div >
      </BrowserRouter>
    );
  }
}

export default App;
