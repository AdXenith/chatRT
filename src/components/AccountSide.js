import React from 'react';

function AccountSide({ currentUser }) {

    
    return ( 
        <div className="container border-x border-lightgray bg-black hidden lg:flex lg:flex-col lg:justify-center pt-32 pb-96 w-1/5 ml-16 -mt-12">
            <img src="/image.png" className="w-28 mx-auto pt-16" alt='profile picture'/>
            <p className="text-center text-white text-3xl  w-2/3 mx-auto">{currentUser.username}</p>

            <a href="/" className="w-24 text-orange underline text-center text-3xl mr-10 lg:pr-0 lg:mx-auto lg:text-2xl lg:mt-10 lg:w-fit my-auto">log out</a>
        </div>
     );
}

export default AccountSide;