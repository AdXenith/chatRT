import React from 'react';
import LoginForm from './LoginForm';
import MakeAccount from './MakeAccount';
import WelcomeHeader from './WelcomeHeader';

function Main({regOrLogin}) {
    return ( 
        <main className='container align-middle mx-auto text-center text-white max-w-sm pb-40'>
            <WelcomeHeader 
                regOrLogin={regOrLogin}/>

            <hr className='text-lightgray mt-6 mb-10 w-72 m-auto'></hr>

            <LoginForm 
                regOrLogin={regOrLogin}/>

            <MakeAccount 
                regOrLogin={regOrLogin}/>
        </main>
     );
}

export default Main;
