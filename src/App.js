import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
import react, { Component} from 'react';

// changing from function to class component
// function App() {
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    }
  }
  render() {
    return (
      <div>
        {/* add navbar */}
        < Navbar dark color="primary" >
          <div className="container">
            {/* Brand name added */}
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar >
        {/* using menu component from MenuComponent */}
        {/* passing the dishes details as props */}
        < Menu dishes={this.state.dishes} />
      </div >
    );
  }
}

export default App;
