import React from 'react';
import LoginForm from './LoginForm';
import MakeAccount from './MakeAccount';
import WelcomeHeader from './WelcomeHeader';

function Main() {
    return ( 
        <main className='container align-middle mx-auto text-center text-white max-w-sm pb-40'>
            <WelcomeHeader 
                regOrLogin={"login"}/>

            <hr className='text-lightgray mt-6 mb-10 w-72 m-auto'></hr>

            <LoginForm 
                regOrLogin={"login"}/>

            <MakeAccount />
        </main>
     );
}

export default Main;
