import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Switch, Route} from "react-router-dom";
import  {Container, Nav} from "react-bootstrap";
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
        <NavBar />
    </div>
  );
}

export default App;
