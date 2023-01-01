import React from 'react';

function MakeAccount({regOrLogin}) {

    let bool;

    if (regOrLogin === "login") {
        bool = true;
    } else {
        bool = false;
    }

    return ( 
        (bool) ? <div className='mt-6'>
            <p className=''>new?</p>
            <a href='/register' className='text-orange underline'>make an account</a>
        </div> : 
        <div className='mt-6'>
            <a href='/' className='text-orange underline'>have an account?</a>
        </div>
     );
}

export default MakeAccount;