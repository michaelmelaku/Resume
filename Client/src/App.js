//import {useState, useEffect} from 'react';
import './App.css';
import {Button } from '@mui/material'
import { BrowserRouter as Router, Routes , Route, Link, Navigate } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import Education from './components/Education/Education';
import Language from './components/Language/Language';
import Summary from './components/summary/Summary';
import Skill from './components/Skill/Skill';
import Work from './components/Work/Work';
import Footer from './container/footer/Footer';

import PrintReact from './components/PrintReact';
import Auth from './container/auth/Auth';
import {useDispatch, useSelector } from 'react-redux';
import { logout, notSignedUp } from './redux/reducers/user';



const App =() => {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user?.currentUser);
  // const [user, setUser] = useState("");

  // useEffect(() => {
  //   setUser(loginUser);
  // }, [loginUser]);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  }

  const signedUpHandler = () => {
    dispatch(notSignedUp());
  }


  return (
    <Router>
      <div className='app'>
        <div style={{position: 'relative'}}>
          <div className="mainHeader">
              <div >
                  <Link to="/" className="headerTitle">
                      <h3 >Resume Builder</h3>
                  </Link>
              </div>
              {user && (<div className="headerActions">
                  <Link to="/profile" className="headerLink">
                    <p> Contacts</p>
                  </Link>
                  <Link to="/work" className="headerLink">
                    <p> Experience</p>
                  </Link>
                  <Link to="/education" className="headerLink">
                    <p> Education</p>
                  </Link>
                  <Link to="/skill" className="headerLink">
                    <p> Skill</p>
                  </Link>
                  <Link to="/summary" className="headerLink">
                    <p> Summary</p>
                  </Link>
                  <Link to="/language" className="headerLink">
                    <p> Language</p>
                  </Link>
              </div>)}
              {user && (<div>
                  <Button onClick={handleLogout}>Logout</Button>
              </div>)}
              {!user && (<div>
                <Link to="/login" className='buttonLink'>
                  <Button onClick={signedUpHandler}>Register</Button>
                </Link>
                <Link to="/login" className='buttonLink'>
                  <Button>Sign In</Button>
                </Link>
              </div>)} 
          </div>
        </div>
        <div className="formData">
              <Routes>
                {!user && (<Route path="/login" element={<Auth />} />)}
                <Route  path="*"  element={<Navigate to = {user ? '/profile' : '/login'} />}/>
                {user && (
                  <>
                    
                    <Route path="/profile"  element={
                      <>
                          <Profile />
                          <PrintReact />
                      </>
                    }/> 
                    <Route path="/education" element={
                      <>
                      <div >
                        <Education />
                      </div>
                      <div >
                        <PrintReact />
                      </div>
                    </>
                    }/>
                    <Route path="/language" element={
                      <>
                      <div >
                        <Language />
                      </div>
                      <div >
                        <PrintReact />
                      </div>
                    </>
                    }/>
                    <Route path="/summary" element={
                      <>
                      <div >
                        <Summary />
                      </div>
                      <div>
                        <PrintReact />
                      </div>
                    </>
                    }/>
                    <Route path="/skill" element={
                      <>
                      <div >
                        <Skill />
                      </div>
                      <div >
                        <PrintReact />
                      </div>
                    </>
                    }/>
                    <Route path="/work" element={
                      <>
                      <div>
                        <Work />
                      </div>
                      <div>
                        <PrintReact />
                      </div>
                    </>
                    }/>
                  </>
                )}
              </Routes>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;

