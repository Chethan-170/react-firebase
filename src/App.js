import NavBar from './components/layout/NavBar';
import DashBoard from './components/dashboard/DashBoard';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProjectDetails from './components/projects/ProjectDetails';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={DashBoard}/>
        <Route path="/project/:id" component={ProjectDetails}/>
      </Switch>
    </BrowserRouter>
  );
}
