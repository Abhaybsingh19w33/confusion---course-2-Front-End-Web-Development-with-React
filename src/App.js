import './App.css';
import Main from './components/MainComponent';
import react, { Component} from 'react';

// changing from function to class component
// function App() {
class App extends Component {
  render() {
    return (
      <div>
        <Main />
      </div >
    );
  }
}

export default App;
