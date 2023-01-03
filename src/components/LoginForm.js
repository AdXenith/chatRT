import React, { useState } from 'react';
import { pb } from '../pocketbase';

function LoginForm({regOrLogin}) {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    var showUsername = false;

    if (regOrLogin === "register") {
        showUsername = true;
    } else { showUsername = false };

    async function login() {
        await pb.collection('users').authWithPassword(username, password);
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
          } catch (err) {
            console.error(err)
          }
    }
    
    function handleSubmit(e) {
        e.preventDefault();

        if (showUsername) {
            register();
            console.log("Registered!");
        } else (login());
    }

    return ( 
        <form onSubmit={handleSubmit}>
            {
                (showUsername) ? <div className='flex flex-col'>
                <label className="text-left ml-2 text-lg" htmlFor="username">username</label>
                <input className="bg-black rounded-xl min-w-fit h-12 px-2 pb-1" type={'text'} id="username" onChange={(e) => setUsername(e.target.value)}></input>
                </div> : null
            }            
            <div className='flex flex-col'>
            <label className="text-left ml-2 text-lg" htmlFor="email">email</label>
            <input className="bg-black rounded-xl min-w-fit h-12 px-2 pb-1" type={'email'} id="email" onChange={(e) => setEmail(e.target.value)}></input>
            </div>

            <div className='flex flex-col'>
            <label className="text-left ml-2 text-lg" htmlFor="password">password</label>
            <input className="bg-black rounded-xl min-w-fit h-12 px-2 pb-1" type={'password'} id="password" onChange={(e) => setPassword(e.target.value)}></input>
            </div>

            <input className="bg-orange rounded-xl h-10 w-80 mt-8 text-lg hover:bg-orangedark hover:cursor-pointer" type={'submit'} value={regOrLogin}></input>
        </form>
     );
}

export default LoginForm;