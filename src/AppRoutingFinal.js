import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import LoginPage from './pages/auth/LoginPage';
import DashBoardPage from './pages/dashboard/DashBoard';

import NotFoundPage from './pages/404/NotFoundPage';

function AppRoutingFinal() {

// TODO: Change to value from sessionStorage (or something dinamic)
  let loggedIn =true ;

  
  return (
      <Router>
        <Routes>

        <Route path='/' element={
  loggedIn ? <Navigate to='/dashboard' replace={true}/> : <Navigate to='/login' replace={false} />
} />


          {/*LOGIN PAGE  */}
          <Route exact path='/login' element={ <LoginPage/> }/>
          {/* DASHBOARD */}
          <Route path='/dashboard' element={loggedIn ? <DashBoardPage /> : <Navigate to='/login' replace={true} />} />
          {/* 404 - Page No Found */}
          <Route path='*' element={< NotFoundPage/> }/>

        </Routes>

      </Router>
        
  );
}

export default AppRoutingFinal;
