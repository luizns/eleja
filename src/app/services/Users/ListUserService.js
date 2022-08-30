import UserModel from '../../models/users/UserModel';

export default class ListUserService {

    constructor() {}

    listAll () {
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
    FindUser(email, password) {
        const user = ListUserService.listAll().find(user => user.email === email && user.password === password)
    
        return user
      }
}

