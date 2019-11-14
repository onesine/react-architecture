import React from 'react';
import UserModel from "../../../models/UserModel";
import User from "./User";

const ListUser = () => {
    const users = UserModel.all();
    console.log(users);
    const printUsers = user => (<User user={user} key={user.id}/>);
    return (
        <div>
            { users.map(printUsers)}
        </div>
    );
};

export default ListUser;