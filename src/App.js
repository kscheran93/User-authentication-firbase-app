import React ,{useEffect,useState}from 'react';
import UserAuth from './UserAuth';
import {auth} from './Firebase';
import Home from './Home';


function App() {
const[presentUser,setPresentUser]= useState(null);
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user) {
      setPresentUser({
        uid:user.uid,
        email:user.email
        
      })
    } else {
      setPresentUser(null);
    }
    })
      
  },[])
  return (
    <div className="App">
      <center>
     {presentUser ? <Home presentUser={presentUser}/> : <UserAuth/>}
     </center>
    </div>
  );
}

export default App;
