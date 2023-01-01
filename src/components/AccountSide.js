import React from 'react';

function AccountSide() {
    return ( 
        <div className="container border-x border-lightgray bg-black flex flex-col justify-center pt-32 pb-96 w-80 -mt-12">
            <img src="/image.png" className="w-28 mx-auto pt-16" />
            <p className="text-center text-white text-2xl font-light w-2/3 mx-auto">Jim Bomersville</p>

            <a href="/" className="text-orange underline text-center text-xl mt-9 w-fit mx-auto">settings</a>
            <a href="" className="text-orange underline text-center text-xl mt-1 w-fit mx-auto">log out</a>
        </div>
     );
}

export default AccountSide;