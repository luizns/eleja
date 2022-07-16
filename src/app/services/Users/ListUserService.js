const UserModel = require('../../models/Users/UserModel');

const ListUserService = {
    listAll: () => {
        const users = [ 
            new UserModel(),
        ]

        return users;
    }
}

module.exports = ListUserService;