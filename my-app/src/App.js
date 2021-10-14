
import './App.css';
import NavBar  from './components/NavBar';
import Register from './components/Register';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import NotFoundRoute from './components/NotFoundRoute';



function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
      <Route exact path="/" component={Register}/>
      <Route exact path="/all" component={AllUsers}/>
      <Route exact path="/add" component={AddUser}/>    
      <Route component={NotFoundRoute} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
