const UserModel = require('../../models/users/UserModel');

const ListUserService = {
    listAll: () => {
        const user1 = new UserModel(
            1,
            "Rodrigo",
            "05202377402",
            "8524156",
            "086598750456",
            "rodrigomoreiralima@hotmail.com"
        );

        const user2 = new UserModel(
            2,
            "Jackson",
            "05514164642",
            "854142486",
            "0846915501651",
            "jack@hotmail.com",
        );

        return [user1, user2];
    }
}

module.exports = ListUserService;