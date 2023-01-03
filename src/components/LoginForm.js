import React from 'react';
import { pb } from '../pocketbase';

function LoginForm({regOrLogin, setToast, setToast2}) {

    var username, password, email;

    var showUsername = false;

    if (regOrLogin === "register") {
        showUsername = true;
    } else { showUsername = false };

    async function login() {
        try {
            const authData = await pb.collection('users').authWithPassword(email, password);
            console.log(pb.authStore.isValid);
            console.log(pb.authStore.token);
            console.log(pb.authStore.model.id);
            pb.authStore.clear();
        } catch (error) {
            console.error(error);
            setToast("");
        }
    }
    
    async function register() {

        try {
            const data = {
              username: username,
              email: email,
              password: password,
              passwordConfirm: password,
              name: "test",
            };
            const record = await pb.collection('users').create(data);
          } catch (error) {
            console.error(error)
            setToast2("");
          }
    }
    
    function handleSubmit(e) {
        e.preventDefault();

        if (showUsername) {
            username = document.getElementById('username').value;
            password = document.getElementById('password').value;
            email = document.getElementById('email').value;
            register();
            window.location.href = "/";
        } else {
            email = document.getElementById('email').value;
            password = document.getElementById('password').value;
            console.log(password);
            console.log(email);
            login();
        };
    }

    return ( 
        <form onSubmit={handleSubmit}>
            {
                (showUsername) ? <div className='flex flex-col'>
                <label className="text-left ml-2 text-lg" htmlFor="username">username</label>
                <input className="bg-black rounded-xl min-w-fit h-12 px-2 pb-1" type={'text'} id="username" required></input>
                </div> : null
            }            
            <div className='flex flex-col'>
            <label className="text-left ml-2 text-lg" htmlFor="email">email</label>
            <input className="bg-black rounded-xl min-w-fit h-12 px-2 pb-1" type={'text'} id="email" placeholder="example@email.com" required></input>
            </div>

            <div className='flex flex-col'>
            <label className="text-left ml-2 text-lg" htmlFor="password">password</label>
            <input className="bg-black rounded-xl min-w-fit h-12 px-2 pb-1" type={'password'} id="password" minLength="8" placeholder={(showUsername) ? "Password must be 8 or more characters." : null} required></input>
            </div>

            <input className="bg-orange rounded-xl h-10 w-80 mt-8 text-lg hover:bg-orangedark hover:cursor-pointer" type={'submit'} value={regOrLogin}></input>
        </form>
     );
}

export default LoginForm;