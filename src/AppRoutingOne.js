import { BrowserRouter as Router, Route, Routes, Link, Navigate} from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TasksPage from './pages/tasks/TasksPage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';
import LoginPage from './pages/auth/LoginPage';
import StatePage from './pages/home/StatePage';

import NotFoundPage from './pages/404/NotFoundPage';
import { useEffect } from 'react';

function AppRoutingOne() {
  let logged = false;

  let taskList =[
   { 
    id:1,
    name: 'Task 1',
    description: 'My Firts Task'
   },
   { 
    id:2,
    name: 'Task 2',
    description: 'My Second Task'
   }
  ]

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
            <Link to='/task/1'>|Task 1 |</Link>
            <Link to='/task/2'>|Task 2 |</Link>
            <Link to='/NotexistingRoute'>| Not Existing Route |</Link>
            <Link to='/login'>| LOGIN ||</Link>
          </aside>
          <main>
          <Routes>
                <Route exact path='/' component={ HomePage }/>
                <Route exact path='/online-state' component={ StatePage }/>
                <Route path='/login' component={
                  logged ? <Navigate to='/' replace={true}/>: <LoginPage /> 
                }/>
                
                
                <Route path='/about' component={ AboutPage }/>
                <Route path='/faqs' component={ AboutPage }/>
                <Route path='/profile' component={
                  logged ? <ProfilePage /> : <Navigate to='/login' replace={true} />
                }/>
                <Route path='/tasks' component={ TasksPage }/>
                <Route path='/task/:id' component={<TaskDetailPage taskList={taskList} />} />
                {/* 404 - Page No Found */}
                <Route path='*' component={ NotFoundPage }/>
          </Routes>

          </main>
        </div>
    </Router>
  );
}

export default AppRoutingOne;
