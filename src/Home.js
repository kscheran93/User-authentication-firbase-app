import React from 'react'
import {auth} from './Firebase';

const Home = ({presentUser}) => {
    return (
        <div>
            <h1>Welcome to {presentUser.email}</h1>
            <button onClick={()=>auth.signOut()}>Sign out</button>
        </div>
    )
}

export default Home
