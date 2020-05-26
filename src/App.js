import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from './components/Login'
import SignUp from './components/SignUp'
import Recipe from './components/Recipe';


const App = () => {
    return (
        <div className='App'>
            Food is HERE!!!

          

          
            <Router>

                {/* Routes: */}
                <Switch>
                    <Route path='/login'>
                        <Login />
                    </Route>

                    <Route path='/signUp'>
                        <SignUp />
                    </Route>
                </Switch>
            </Router>

        </div>
    )
}

export default App;