import React, { Fragment, useEffect, useState } from 'react';
import { pb } from '../pocketbase';
import AccountSide from './AccountSide';
import Channels from './Channels';

function Chat({ currentUser, chatSelected }) {

    const [chats, setChats] = useState([]);
    
    useEffect(() => {
        async function fetchChats(){
            setChats(await pb.collection('messages').getList(1,50, {
                sort: 'created',
                filter: 'channel = "' + chatSelected.id + '"',
                expand: 'user',
            }), []);
        }
        fetchChats();
    }, []);

    async function getUser(userId) {
        let user = await pb.collection('users').getOne(userId);
        let username = user.username;
        return username;
    }

    async function sendMessage(e) {
        e.preventDefault();

        try {
            const data = {
              text: document.getElementById('message').value,
              user: currentUser.id,
              channel: chatSelected.id,
            };
            const record = await pb.collection('messages').create(data);
          } catch (error) {
            console.error(error);
        }
    }

    return ( 
        <Fragment>
            <AccountSide 
                currentUser={currentUser}/>
            
            <div className='container bg-black w-2/3 rounded-t-[3rem] absolute top-12 right-[8%] rounded-b-[2rem]'>
                <div className="flex flex-row bg-lightgray rounded-l-full rounded-r-full border-b border-b-black">
                        <img src="/image.png" className="w-16 flex-none" />
                        <p className="text-2xl my-auto pl-6 text-white font-semibold w-[79.5%]">{chatSelected.name}</p>
                </div>

                <div className='chat-container h-[42rem]'>

                    { (chats.length == 0) ? null :
                    
                    Object.entries(chats)[4][1].map(chat => 
                        <div className="container bg-scroll pt-6 relative">
                            <img src="/image.png" className="w-8 h-8 ml-4 absolute bottom-0" />
                            <div className="max-w-[75%] text-white bg-lightgray rounded-lg p-2 ml-14 h-fit">
                                <p className='mb-1 font-semibold'>{chat.expand.user.username}</p>
                                <p className='overflow-auto'>{chat.text}</p>
                            </div>
                        </div>) }

                </div>

                <div className="flex flex-row relative">
                    <img src="/image.png" className="w-14 flex-none absolute" />
                    <form onSubmit={sendMessage} className="flex flex-row h-14 w-full">
                        <input type={'text'} id='message' className="pl-16 w-full bg-lightgray rounded-l-full" placeholder="Send a message..."></input>

                        <input type={'submit'} id='send' value={"hello"} className="">

                        </input>
                    </form>
                </div>
            </div>
        </Fragment>
     );
}

export default Chat;