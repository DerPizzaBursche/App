import './App.css'
import Naviagtion from './Components/Navigation'
import Home from './Views/Home'
import Login from './Views/Login';
import { Route, Routes} from 'react-router-dom';

function App() {
  console.log("home render start");
  debugger //eslint-disable-line
    return (
    <div className="layout">
      <nav>   
        <Naviagtion/>
      </nav>
      <main>
        <Routes>
              <Route path="/" element={<Home />} />
        </Routes>  
      </main>
      <footer>
          ©DerPizzaBursche
      </footer>
    </div>
  )
}

export default App
