import React, { Fragment, useEffect, useState } from 'react';
import AccountSide from './AccountSide';
import { pb } from '../pocketbase';

function Channels({ currentUser, setChatSelected }) {

    const [channels, setChannels] = useState([]);

    async function fetchChannels(){
        setChannels(await pb.collection('channels').getFullList(3, {
            sort: '-created',
        }));
    }

    useEffect(() => {
        fetchChannels();
    }, []);


    return ( 
        <Fragment>
            <div className="w-11/12 pt-24 lg:pt-0 mx-auto flex flex-row">
                <AccountSide 
                    currentUser={currentUser}/>
                <div className="11/12 lg:w-10/12 lg:pl-12 lg:pt-20 mx-auto lg:mr-0">
                    <h2 className="text-orange text-left text-[6rem] lg:text-2xl lg:font-light">CHANNELS</h2>
                    <hr className='text-lightgray mt-2 mb-4 w-full lg:w-80'></hr>

                    { channels.map(channel => 
                        <div onClick={() => setChatSelected(channel)} className="flex flex-row bg-lightgray pr-12 h-40 lg:h-fit rounded-sm lg:rounded-full w-full lg:w-11/12 2xl:w-10/12 mb-4  hover:cursor-pointer hover:outline hover:outline-white hover:outline-2 hover:opacity-100">
                            <img src="/image.png" className="w-32 h-32 lg:w-20 lg:h-20 my-auto ml-4 lg:ml-0 flex-none" />
                            <p className="text-3xl font-normal text-[3rem] lg:text-2xl my-auto pl-6 text-white lg:font-light w-[79.5%]">{channel.name}</p>
                        </div>) }
                </div>
            </div>
            
            <div className="border-lightgray bg-black w-full flex flex-row h-24 my-auto fixed bottom-0 lg:hidden">
                <img src="/image.png" className="w-20 h-20 ml-12 my-auto" alt='profile picture'/>
                <p className="text-white text-3xl ml-2 my-auto w-2/3">{currentUser.username}</p>

                <a href="/" className="w-24 text-orange underline text-center text-3xl mr-10 my-auto">log out</a>
            </div>
        </Fragment>
     );
}

export default Channels;