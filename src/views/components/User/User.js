import React from 'react';

const User = props => {
    const user = props.user;
    return (
        <p>
            {user.id} <br/>
            {user.name} <br/>
            {user.email} <br/>
        </p>
    );
};

export default User;