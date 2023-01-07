import React, { Fragment, useEffect, useState } from 'react';
import { pb } from '../pocketbase';
import AccountSide from './AccountSide';

function Chat({ currentUser, chatSelected, setChatSelected }) {

    const [chats, setChats] = useState([]);

    async function fetchChats(){
        setChats(await pb.collection('messages').getList(1,50, {
            sort: '-created',
            filter: 'channel = "' + chatSelected.id + '"',
            expand: 'user',
        }));
    }

    function updateScroll(){
        var element = document.getElementById("dummy");
        element.scrollIntoView({block: 'end'});
    }
    
    useEffect(() => {

        if (chats.length == 0) { 
            fetchChats();
        };

        pb.collection('messages').subscribe('*', async function(e) {
            fetchChats();
            updateScroll();
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
            updateScroll();
          } catch (error) {
            console.error(error);
        }
    }

    return ( 
        <Fragment>
            <AccountSide 
                currentUser={currentUser}/>
            
            <div className='bg-black w-full h-full lg:h-fit lg:w-3/5 lg:rounded-t-[3rem] absolute lg:top-16 lg:right-[8%] lg:rounded-b-[2rem]'>
                <div className="flex flex-row h-40 lg:h-fit rounded-b-xl bg-lightgray lg:rounded-full border-b border-b-black">
                        <img src="/image.png" className="h-32 lg:h-20 w-32 ml-4 lg:ml-0 lg:w-20 m-auto lg:m-0 flex-none" />
                        <p className="text-4xl lg:text-2xl my-auto pl-6 text-white font-semibold w-[79.5%]">{chatSelected.name}</p>
                        <img className='hover:cursor-pointer my-auto w-28 lg:w-8 mr-4 lg:text-base text-3xl lg:absolute lg:right-4 lg:top-6' src='../back.png' onClick={() => setChatSelected(null)}></img>
                </div>

                <div id='chat-container' className='chat-container lg:h-[42rem]'>

                    { (chats.length == 0) ? null :
                    
                    Object.entries(chats)[4][1].slice(0).reverse().map(chat => 
                        <div className="container pt-6 relative">
                            <img src="/image.png" className="w-20 h-20 lg:w-10 lg:h-10 ml-8 lg:ml-4 absolute bottom-0" />
                            <div className="lg:max-w-[75%] text-white bg-lightgray rounded-lg p-2 ml-36 lg:ml-16 h-fit">
                                <p className='mb-1 font-semibold text-4xl lg:text-base'>{chat.expand.user.username}</p>
                                <p className='break-words text-4xl lg:text-base'>{chat.text}</p>
                            </div>
                        </div>) }

                    <div id='dummy' className='mt-48 lg:mt-24'>
                    </div>

                </div>

                    <div className="flex flex-row absolute lg:relative bottom-0 rounded-full border-t border-black">
                        <img src="/image.png" className="w-24 lg:w-14 flex-none absolute" />
                        <form onSubmit={sendMessage} className="flex flex-row h-24 lg:h-14 w-full">
                            <input type={'text'} id='message' className="px-28 lg:px-16 text-3xl lg:text-base lg:h-14 w-screen lg:w-full text-white bg-lightgray rounded-full break-words" maxLength={"400"} placeholder="Send a message..." required></input>

                            <input type={'image'} src="/send.png" alt='submit' id='send' className="w-24 lg:w-14 absolute right-0 opacity-60 hover:opacity-100 hover:outline hover:outline-2 hover:outline-white rounded-full"></input>
                        </form>
                    </div>
            </div>
        </Fragment>
     );
}

export default Chat;