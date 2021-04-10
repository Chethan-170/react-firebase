import NavBar from './components/layout/NavBar';
import DashBoard from './components/dashboard/DashBoard';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProjectDetails from './components/projects/ProjectDetails';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import CreateProject from './components/projects/CreateProject';
import Logout from './components/layout/Logout';
import { useState } from 'react';

export default function App() {
  const [isLogoutOpen, setLogoutOpen] = useState(false);
  return (
    <BrowserRouter>
        <NavBar dialogHandler={(status)=>{setLogoutOpen(status)}}/>
        <Switch>
          <Route exact path="/" component={DashBoard}/>
          <Route path="/project/:id" component={ProjectDetails}/>
          <Route exact path="/signin" component={Signin}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/new" component={CreateProject}/>
        </Switch>
        <Logout isOpen={isLogoutOpen} dialogHandler={(status)=>{setLogoutOpen(status)}}/>
    </BrowserRouter>
  );
}
