import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent';

function App() {
  return (
    <div>
      {/* add navbar */}
      <Navbar dark color="primary">
        <div className="container">
          {/* Brand name added */}
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      {/* using menu component from MenuComponent */}
      <Menu />
    </div>
  );
}

export default App;
