import React from "react";
import '../style.css'



function Home () {
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
            </div>
            
        </div>
    )
}

export default Home;
