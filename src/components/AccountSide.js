import React from 'react';

function AccountSide({ currentUser }) {
    return ( 
        <div className="container border-x border-lightgray bg-black flex flex-col justify-center pt-32 pb-96 w-1/5 ml-16 -mt-12">
            <img src="/image.png" className="w-28 mx-auto pt-16" alt='profile picture'/>
            <p className="text-center text-white text-2xl font-light w-2/3 mx-auto">{currentUser.username}</p>

            <a href="/" className="text-orange underline text-center text-xl mt-9 w-fit mx-auto">settings</a>
            <a href="/" className="text-orange underline text-center text-xl mt-1 w-fit mx-auto">log out</a>
        </div>
     );
}

export default AccountSide;