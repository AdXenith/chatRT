import React from 'react';
import AccountSide from './AccountSide';

function Channels() {
    return ( 
        <div className="w-11/12 mx-auto flex flex-row">
            <AccountSide />
            <div className="w-10/12 pl-24 pt-20">
                <h2 className="text-orange text-left text-2xl font-light">CHANNELS</h2>
                <hr className='text-lightgray mt-2 mb-4 w-80'></hr>

                <div className="flex flex-row bg-lightgray rounded-l-full rounded-r-full w-8/12 mb-4">
                    <img src="/image.png" className="w-20 flex-none" />
                    <p className="text-2xl my-auto pl-6 text-white font-light w-9/12">Pizza Party Hangout</p>
                    <a className="hover:cursor-pointer w-10 my-auto "><img src="/kebab.png"></img></a>
                </div>

                <div className="flex flex-row bg-lightgray rounded-l-full rounded-r-full w-8/12 mb-4">
                    <img src="/image.png" className="w-20" />
                    <p className="text-2xl my-auto pl-6 text-white font-light w-9/12">Backyard Hooligans</p>
                    <a className="hover:cursor-pointer w-10 my-auto"><img src="/kebab.png"></img></a>
                </div>
                
                <div className="flex flex-row bg-lightgray rounded-l-full rounded-r-full w-8/12 mb-4">
                    <img src="/image.png" className="w-20" />
                    <p className="text-2xl my-auto pl-6 text-white font-light w-9/12">Class 9B</p>
                    <a className="hover:cursor-pointer w-10 my-auto"><img src="/kebab.png"></img></a>
                </div>
            </div>
        </div>
     );
}

export default Channels;