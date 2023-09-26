import {NavLink} from 'react-router-dom';
import './Navigation.tsx.css';
// import AuthService from '../Services/auth.service';
function Navigation() {

  // const authService = new AuthService;

   return  (
      <nav className='navigation'>
        <div className="icon">
      
        </div>
        <ul className="links">
          <NavLink className="navLink" to='/'> Home</NavLink>
        </ul>
        {/* <button onClick={() =>authService.authorize('testUser','testUser')}>Anmelden</button> */}
      </nav>
    ) 
}

export interface INaviagtion{}
export default Navigation