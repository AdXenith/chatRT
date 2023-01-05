import React, { useState } from 'react';
import Channels from './Channels';
import Chat from './Chat';
import Landing from './Landing';

function Main({regOrLogin, currentUser, setCurrentUser}) {

    const [chatSelected, setChatSelected] = useState();

    return ( 
        <main>
            { 
            (!currentUser)
                ? 
                <Landing 
                    regOrLogin={regOrLogin}
                    setCurrentUser={setCurrentUser} />
                :
                (chatSelected != null)
                    ?
                    <Chat
                        currentUser={currentUser}
                        chatSelected={chatSelected} />
                    :
                    <Channels
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                    setChatSelected={setChatSelected} />
            }
        </main>
     );
}

export default Main;