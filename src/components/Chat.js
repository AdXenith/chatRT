import React, { Fragment } from 'react';
import { pb } from '../pocketbase';
import AccountSide from './AccountSide';

function Chat({ currentUser, chatSelected }) {

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
            
            <div className='container bg-black w-2/3 rounded-t-[3rem] absolute top-12 right-[8%] h-2/3 rounded-b-[2rem]'>
                <div className="flex flex-row bg-lightgray rounded-l-full rounded-r-full border-b border-b-black">
                        <img src="/image.png" className="w-16 flex-none" />
                        <p className="text-2xl my-auto pl-6 text-white font-semibold w-[79.5%]">{chatSelected.name}</p>
                </div>

                <div className='chat-container h-[42rem]'>
                <div className="container bg-scroll pt-6 relative">
                    <img src="/image.png" className="w-8 h-8 ml-4 absolute bottom-0" />
                    <div className="max-w-[90%] text-white bg-lightgray rounded-lg p-2 ml-14 h-fit">
                        <p>Jim Bomersville</p>
                        <p className='overflow-auto'>Hello peopl eof te internet i am talking aaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                    </div>
                </div>

                <div className="container flex flex-row bg-scroll pt-4">
                    <img src="/image.png" className="w-10 h-10 flex-none mt-6 ml-4" />
                    <div className="max-w-[65%] text-white bg-lightgray rounded-lg p-2 ml-1">
                        <p>Jim Bomersville</p>
                        <p>Hello peopl eof te internet i am talking</p>
                    </div>
                </div>

                <div className="container flex flex-row bg-scroll">
                    <img src="/image.png" className="w-10 h-10 flex-none mt-6 ml-4" />
                    <div className="max-w-[65%] text-white bg-lightgray rounded-lg p-2 ml-1">
                        <p>Jim Bomersville</p>
                        <p>Hello peopl eof te internet i am talking</p>
                    </div>
                </div>

                <div className="container flex flex-row bg-scroll">
                    <img src="/image.png" className="w-10 h-10 flex-none mt-6 ml-4" />
                    <div className="max-w-[65%] text-white bg-lightgray rounded-lg p-2 ml-1">
                        <p>Jim Bomersville</p>
                        <p>Hello peopl eof te internet i am talking</p>
                    </div>
                </div>

                <div className="container flex flex-row bg-scroll">
                    <img src="/image.png" className="w-10 h-10 flex-none mt-6 ml-4" />
                    <div className="max-w-[65%] text-white bg-lightgray rounded-lg p-2 ml-1">
                        <p>Jim Bomersville</p>
                        <p>Hello peopl eof te internet i am talking</p>
                    </div>
                </div>

                <div className="container flex flex-row bg-scroll">
                    <img src="/image.png" className="w-10 h-10 flex-none mt-6 ml-4" />
                    <div className="max-w-[65%] text-white bg-lightgray rounded-lg p-2 ml-1">
                        <p>Jim Bomersville</p>
                        <p>Hello peopl eof te internet i am talking</p>
                    </div>
                </div>

                <div className="container flex flex-row bg-scroll">
                    <img src="/image.png" className="w-10 h-10 flex-none mt-6 ml-4" />
                    <div className="max-w-[65%] text-white bg-lightgray rounded-lg p-2 ml-1">
                        <p>Jim Bomersville</p>
                        <p>Hello peopl eof te internet i am talking</p>
                    </div>
                </div>

                <div className="container flex flex-row bg-scroll">
                    <img src="/image.png" className="w-10 h-10 flex-none mt-6 ml-4" />
                    <div className="max-w-[65%] text-white bg-lightgray rounded-lg p-2 ml-1">
                        <p>Jim Bomersville</p>
                        <p>Hello peopl eof te internet i am talking</p>
                    </div>
                </div>
                <div className="container flex flex-row bg-scroll">
                    <img src="/image.png" className="w-10 h-10 flex-none mt-6 ml-4" />
                    <div className="max-w-[65%] text-white bg-lightgray rounded-lg p-2 ml-1">
                        <p>Jim Bomersville</p>
                        <p>Hello peopl eof te internet i am talking</p>
                    </div>
                </div>
                <div className="container flex flex-row bg-scroll">
                    <img src="/image.png" className="w-10 h-10 flex-none mt-6 ml-4" />
                    <div className="max-w-[65%] text-white bg-lightgray rounded-lg p-2 ml-1">
                        <p>Jim Bomersville</p>
                        <p>Hello peopl eof te internet i am talking</p>
                    </div>
                </div>
                <div className="container flex flex-row bg-scroll">
                    <img src="/image.png" className="w-10 h-10 flex-none mt-6 ml-4" />
                    <div className="max-w-[65%] text-white bg-lightgray rounded-lg p-2 ml-1">
                        <p>Jim Bomersville</p>
                        <p>Hello peopl eof te internet i am talking</p>
                    </div>
                </div>
                <div className="container flex flex-row bg-scroll">
                    <img src="/image.png" className="w-10 h-10 flex-none mt-6 ml-4" />
                    <div className="max-w-[65%] text-white bg-lightgray rounded-lg p-2 ml-1">
                        <p>Jim Bomersville</p>
                        <p>Hello peopl eof te internet i am talking</p>
                    </div>
                </div>
                <div className="container flex flex-row bg-scroll">
                    <img src="/image.png" className="w-10 h-10 flex-none mt-6 ml-4" />
                    <div className="max-w-[65%] text-white bg-lightgray rounded-lg p-2 ml-1">
                        <p>Jim Bomersville</p>
                        <p>Hello peopl eof te internet i am talking</p>
                    </div>
                </div>
                <div className="container flex flex-row bg-scroll">
                    <img src="/image.png" className="w-10 h-10 flex-none mt-6 ml-4" />
                    <div className="max-w-[65%] text-white bg-lightgray rounded-lg p-2 ml-1">
                        <p>Jim Bomersville</p>
                        <p>hello babes</p>
                    </div>
                </div>
                <div className="container flex flex-row bg-scroll">
                    <img src="/image.png" className="w-10 h-10 flex-none mt-6 ml-4" />
                    <div className="max-w-[65%] text-white bg-lightgray rounded-lg p-2 ml-1">
                        <p>Jim Bomersville</p>
                        <p>Hello peopl eof te internet i am talking</p>
                    </div>
                </div>
                <div className="container flex flex-row bg-scroll pb-10">
                    <img src="/image.png" className="w-10 h-10 flex-none mt-6 ml-4" />
                    <div className="max-w-[65%] text-white bg-lightgray rounded-lg p-2 ml-1">
                        <p>Jim Bomersville</p>
                        <p>Hello peopl eof te internet i am talking</p>
                    </div>
                </div>
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