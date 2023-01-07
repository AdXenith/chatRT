import React from 'react';

function Footer({ currentUser }) {
    return ( 
        <div className='footer bg-black w-screen h-24 lg:h-14 bottom-0 fixed'>
            <span className="hidden lg:inline-grid grid-cols-2 pt-3 min-w-full">
                <span className="text-orange text-xl text-left pl-4">chatRT</span>
                <span className="text-white text-xl text-right pr-4">@AdXenith 2023</span>
            </span>
        </div>
     );
}

export default Footer;