import React from "react";
import { useHistory } from 'react-router-dom'
import '../style.css'



function Home () {
    const history = useHistory();
   
    return(
        <div>
            <div className='background'>
                <img
                src='./images/background.jpg'
                className='img-fluid'
                alt='cool colors'
                />
            </div>
            <div className='image-content text-center'>
                <h1>Welcome to Stasis</h1>
                <div>
                    <button className='btn btn-dark mr-3' onClick={() => history.push('/signup')}>Signup</button>
                    <button className='btn btn-dark' onClick={() => history.push('/login')}>Log in</button>

                </div>
            </div>
            
        </div>
    )
}

export default Home;
