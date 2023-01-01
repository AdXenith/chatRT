import React from 'react';

function WelcomeHeader({ regOrLogin }) {
    return (  
        <h1 className='font-light text-4xl'>
            welcome to <span className='text-orange'>chatRT</span>! <br/>
            please {regOrLogin}:
        </h1>
    );
}

export default WelcomeHeader;