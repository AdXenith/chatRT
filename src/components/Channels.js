import React, { useEffect, useState } from 'react';
import AccountSide from './AccountSide';
import { pb } from '../pocketbase';

function Channels({ currentUser, setCurrentUser, setChatSelected }) {

    const [channels, setChannels] = useState([]);

    useEffect(() => {
        async function fetchChannels(){
            setChannels(await pb.collection('channels').getFullList(3, {
                sort: '-created',
            }));
        }
        fetchChannels();
    });


    return ( 
        <div className="w-11/12 mx-auto flex flex-row">
            <AccountSide 
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}/>
            <div className="w-10/12 pl-24 pt-20">
                <h2 className="text-orange text-left text-2xl font-light">CHANNELS</h2>
                <hr className='text-lightgray mt-2 mb-4 w-80'></hr>

                { channels.map(channel => 
                    <div onClick={() => setChatSelected(channel)} className="flex flex-row bg-lightgray rounded-l-full rounded-r-full w-8/12 mb-4 hover:cursor-pointer hover:outline hover:outline-white hover:outline-2 hover:opacity-100">
                        <img src="/image.png" className="w-20 flex-none" />
                        <p className="text-2xl my-auto pl-6 text-white font-light w-[79.5%]">{channel.name}</p>
                    </div>) }
            </div>
        </div>
     );
}

export default Channels;