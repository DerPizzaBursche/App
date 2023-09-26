import './App.css'
import Naviagtion from './Components/Navigation'
import Home from './Views/Home'
//import Login from './Views/Login';
import { Route, Routes} from 'react-router-dom';
import AuthService from './Services/auth.service';
import { useEffect } from 'react';

function App() {
  debugger //eslint-disable-line
  const authService = new AuthService;
  useEffect(()=>{
    authService.unsetToken();
  });
  //  authService.isExpired() ? (
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
  // :(
  //   <div className="layout">
  //     <nav>   
  //       <Naviagtion/>
  //     </nav>
  //     <main>
  //       <Routes>
  //             <Route path="/" element={<Login />} />
  //       </Routes>  
  //     </main>
  //     <footer>
  //         ©DerPizzaBursche
  //     </footer>
  //   </div>
  //)
}

export default App
