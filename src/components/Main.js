import React from 'react';
import LoginForm from './LoginForm';
import MakeAccount from './MakeAccount';
import WelcomeHeader from './WelcomeHeader';

function Main() {
    return ( 
        <main className='text-center text-white'>
            <WelcomeHeader 
                regOrLogin="login"/>

            <hr className='text-lightgray mt-2 mb-2 w-64 m-auto'></hr>

            <LoginForm />

            <MakeAccount />
        </main>
     );
}

export default Main;
