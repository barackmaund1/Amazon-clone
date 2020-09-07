import React, {useEffect}from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';



function App() {
  const [{user},dispatch]=useStateValue();
// useEffect <<<< Powerful
// piece of code which runs based on a given condition
  useEffect(() => {
    const unsubscribe=auth.onAuthStateChanged((authUser) =>{
      if(authUser){
        //the user is logged in...
        dispatch({
          type:'SET_USER',
          user:authUser,
        })
      }else{
        // the user is  logged out
         dispatch({
           type: 'SET_USER',
           user: null,
         })
      }
    })
   return () =>{
     // any Cleanup operation go in here...
     unsubscribe();
   }
  }, [])

  console.log(user);
return (
    <Router>
      <div className="app">
       
        {/*We need REACT_ROUTER*/}
          <Switch>
             {/*localhost.com/checkout*/}
              <Route path='/checkout'>
              <Header/>
              <Checkout/>
              </Route>
               {/*localhost.com/login*/}
              <Route path='/login'>
              <Login/>
             </Route>
              {/*This is the default route*/}
              <Route path='/'>
              <Header/>
              <Home/>
            
              </Route>
          </Switch>
       </div>
    </Router>
    
  );
}

export default App;
