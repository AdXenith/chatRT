import React, { useState } from 'react';
import Channels from './Channels';
import Landing from './Landing';

function Main({regOrLogin, currentUser, setCurrentUser}) {

    return ( 
        <main>
            { 
            (!currentUser)
                ? 
                <Landing 
                    regOrLogin={regOrLogin}
                    setCurrentUser={setCurrentUser} />
                :
                <Channels
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser} />
            }
        </main>
     );
}

export default Main;