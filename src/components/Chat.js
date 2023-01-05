import React, { Fragment, useEffect, useState } from 'react';
import { pb } from '../pocketbase';
import AccountSide from './AccountSide';

function Chat({ currentUser, chatSelected }) {

    const [chats, setChats] = useState([]);

    async function fetchChats(){
        setChats(await pb.collection('messages').getList(1,50, {
            sort: 'created',
            filter: 'channel = "' + chatSelected.id + '"',
            expand: 'user',
        }), []);
    }

    function updateScroll(){
        var element = document.getElementById("yourDivID");
        element.scrollTop = element.scrollHeight;
    }
    
    useEffect(() => {

        if (chats.length == 0) { 
            fetchChats();
            
        };

        pb.collection('messages').subscribe('*', async function(e) {
            console.log(e);
            fetchChats();
        })
    });

    async function sendMessage(e) {
        e.preventDefault();

        try {
            const data = {
              text: document.getElementById('message').value,
              user: currentUser.id,
              channel: chatSelected.id,
            };
            const record = await pb.collection('messages').create(data);

            document.getElementById('message').value = "";
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

                <div className='chat-container h-[42rem] pb-16'>

                    { (chats.length == 0) ? null :
                    
                    Object.entries(chats)[4][1].map(chat => 
                        <div className="container pt-6 relative">
                            <img src="/image.png" className="w-8 h-8 ml-4 absolute bottom-0" />
                            <div className="max-w-[75%] text-white bg-lightgray rounded-lg p-2 ml-14 h-fit">
                                <p className='mb-1 font-semibold'>{chat.expand.user.username}</p>
                                <p className='break-words'>{chat.text}</p>
                            </div>
                        </div>) }

                </div>

                <div className="flex flex-row relative rounded-full border-t border-black">
                    <img src="/image.png" className="w-14 flex-none absolute" />
                    <form onSubmit={sendMessage} className="flex flex-row h-14 w-full">
                        <input type={'text'} id='message' className="pl-16 pr-16 w-full text-white bg-lightgray rounded-full break-words" maxLength={"400"} placeholder="Send a message..." required></input>

                        <input type={'image'} src="/send.png" alt='submit' id='send' className="w-14 absolute right-0 opacity-60 hover:opacity-100 hover:outline hover:outline-2 hover:outline-white rounded-full"></input>
                    </form>
                </div>
            </div>
        </Fragment>
     );
}

export default Chat;