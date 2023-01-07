import React from 'react';

function WelcomeHeader({ regOrLogin }) {
    return (  
        <div className='h-96 lg:h-fit'>
            <h1 className='pt-24 lg:font-light lg:my-0 text-[3rem] lg:text-4xl'>
                welcome to <span className='text-orange'>chatRT</span>! <br/>
                please {regOrLogin}:
            </h1>
        </div>
    );
}

export default WelcomeHeader;