import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NotFound from './components/pages/NotFound';
import AddUser from './components/users/AddUsers';
import EditUsers from './components/users/EditUsers';
import User from './components/users/users';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>

                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/contact' component={Contact}/>
                    <Route exact path='/users/add' component={AddUser}/>
                    <Route exact path='/users/edit/:id' component={EditUsers}/>
                    <Route exact path='/users/:id' component={User}/>
                    <Route component={NotFound} />
                </Switch>

            </div>
        </Router>
    );
}

export default App;
