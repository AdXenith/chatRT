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
            <p className='text-3xl lg:text-base'>new?</p>
            <a href='/register' className='text-orange underline text-3xl lg:text-base'>make an account</a>
        </div> : 
        <div className='mt-6'>
            <a href='/' className='text-orange underline text-3xl lg:text-base'>have an account?</a>
        </div>
     );
}

export default MakeAccount;