import users from '../constants/users'

class UserModel {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    save() {

    };

    static add(user) {
        // USER AXIOS TO PUT DATA IN DATABASE
        return "add";
    }

    static all() {
        return users;
    }

    static finById(id) {
        return {
            id: id,
            name: 'tony',
            email: 'tony@mail.com',
        };
    }

    static update(user) {

    }

    static delete(user) {

    }
}

export default UserModel;