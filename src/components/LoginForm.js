import React from 'react';


function LoginForm({regOrLogin}) {
    return ( 
        <form>
            <div className='flex flex-col'>
            <label className="text-left ml-2 text-lg" for="username">username</label>
            <input className="bg-black rounded-xl min-w-fit h-12 px-2 pb-1" type={'text'} id="username"></input>
            </div>
            
            <div className='flex flex-col'>
            <label className="text-left ml-2 text-lg" for="email">email</label>
            <input className="bg-black rounded-xl min-w-fit h-12 px-2 pb-1" type={'text'} id="email"></input>
            </div>

            <div className='flex flex-col'>
            <label className="text-left ml-2 text-lg" for="password">password</label>
            <input className="bg-black rounded-xl min-w-fit h-12 px-2 pb-1" type={'password'} id="password"></input>
            </div>

            <input className="bg-orange rounded-xl h-10 w-80 mt-8 text-lg hover:bg-orangedark hover:cursor-pointer" type={'submit'} value={regOrLogin}></input>
        </form>
     );
}

export default LoginForm;