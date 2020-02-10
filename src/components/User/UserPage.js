import React from 'react';

const UserPage = ({ name }) => {
    return (
        <div>
            <p className='f2'>{`Welcome to Health-Hub, ${name}`}</p>
        </div>
    );
}

export default UserPage;