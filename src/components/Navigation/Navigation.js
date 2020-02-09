import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
        return (
            <nav className="db dt-l w-100 border-box pa3 ph5-l">
                <h1 className="db dtc-l v-mid  link dim w-100 w-25-l tc tl-l mb2 mb0-l">Health-Hub</h1>
                <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
                    {/* <p class="link dim black f4 f5-1 dib mr3 mr4-1 underline pa3 pointer" >Search</p>
              <p class="link dim black f4 f5-1 dib mr3 mr4-1 underline pa3 pointer">My information</p> */}
                    <p onClick={() => onRouteChange('SignOut')}
                        className='link dim black f4 f5-1 dib mr3 mr4-1 underline pa3 pointer'>Sign out</p>
                </div>
            </nav>
            // {/* <nav style={{display:'flex',justifyContent:'flex-end'}}>
            // <p  onClick={()=>onRouteChange('SignOut')}
            //     className='f4 link dim black underline pa3 pointer'>Sign out</p>
            // </nav>   */}
        );

    } else {
        return (
            <nav className="db dt-l w-100 border-box pa3 ph5-l" >
                <h1 className="db dtc-l v-mid  link dim w-100 w-25-l tc tl-l mb2 mb0-l">Health-Hub</h1>
                <div className="db dtc-l v-mid w-100 w-100-l tc tr-l" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <p onClick={() => onRouteChange('Signin')}
                        className='f4 link dim black underline pa3 pointer'>Sign in</p>
                    <p onClick={() => onRouteChange('Register')}
                        className='f4 link dim black underline pa3 pointer'>Register</p>
                </div>
            </nav>
        );
    }
}

export default Navigation;