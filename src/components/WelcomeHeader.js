import React from 'react';

function WelcomeHeader({ regOrLogin }) {
    return (  
        <h1>
            welcome to <span className='titleColor'>chatRT</span>! <br/>
            please {regOrLogin}:
        </h1>
    );
}

export default WelcomeHeader;