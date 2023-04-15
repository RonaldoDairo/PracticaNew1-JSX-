import { BrowserRouter as Router, Route, Routes, Link, Navigate} from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TasksPage from './pages/tasks/TasksPage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';
import LoginPage from './pages/auth/LoginPage';
import NotFoundPage from './pages/404/NotFoundPage';
import { useEffect } from 'react';

function AppRoutingOne() {
  let logged = false;


  useEffect(() => {
    logged = localStorage.getItem('credentials');
    console.log('User  Logged?', logged)
  }, []);
  return (
    <Router>
        <div>
          <aside>
            <Link to='/'>|| HOME |</Link>
            <Link to='/about'>| ABOUT |</Link>
            <Link to='/faqs'>| FAQs |</Link>
            <Link to='/NotexistingRoute'>| Not Existing Route |</Link>
            <Link to='/login'>| LOGIN ||</Link>
          </aside>
          <main>
          <Routes>
                <Route exact path='/' Component={ HomePage }/>
                <Route path='/login' element={
                  logged ? <Navigate to='/' replace={true}/>: <LoginPage /> 
                }/>
                
                  
                
                <Route path='/about' Component={ AboutPage }/>
                <Route path='/faqs' Component={ AboutPage }/>
                <Route path='/profile' element={
                  logged ? <ProfilePage /> : <Navigate to='/login' replace={true} />
                }/>
                <Route path='/tasks' Component={ TasksPage }/>
                <Route path='/task/:id' Component={ TaskDetailPage }/>
                {/* 404 - Page No Found */}
                <Route path='*' Component={ NotFoundPage }/>
          </Routes>

          </main>
        </div>
    </Router>
  );
}

export default AppRoutingOne;
