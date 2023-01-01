import React from 'react';

function Footer() {
    return ( 
        <div className='footer bg-black w-screen h-14 bottom-0 fixed'>
            <span className="inline-grid grid-cols-2 pt-3 min-w-full">
                <span className="text-orange text-xl text-left pl-4">chatRT</span>
                <span className="text-white text-xl text-right pr-4">@AdXenith 2023</span>
            </span>
        </div>
     );
}

export default Footer;