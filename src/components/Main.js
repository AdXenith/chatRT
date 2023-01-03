import React, { useState } from 'react';
import LoginForm from './LoginForm';
import MakeAccount from './MakeAccount';
import WelcomeHeader from './WelcomeHeader';

function Main({regOrLogin}) {

    const [toast, setToast] = useState("hidden");
    const [toast2, setToast2] = useState("hidden");

    return ( 
        <main className='container align-middle mx-auto text-center text-white max-w-sm pb-40'>
            <WelcomeHeader 
                regOrLogin={regOrLogin}/>

            <hr className='text-lightgray mt-6 mb-10 w-72 m-auto'></hr>

            <LoginForm 
                regOrLogin={regOrLogin}
                setToast={setToast}
                setToast2={setToast2}/>

            <MakeAccount 
                regOrLogin={regOrLogin}/>

            <div id="toast-default" className={"text-center max-w-xs p-4 bg-orange rounded-lg shadow absolute bottom-40 left-1/2 -translate-x-1/2 " + toast}>
                <div className="px-4">Incorrect email or password.</div>
            </div>

            <div id="toast-default" className={"text-center max-w-xs p-4 bg-orange rounded-lg shadow absolute bottom-40 left-1/2 -translate-x-1/2 " + toast2}>
                <div className="px-4">Something went wrong. Please try again.</div>
            </div>
        </main>
     );
}

export default Main;