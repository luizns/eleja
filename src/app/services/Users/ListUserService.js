const UserModel = require('../../models/Users/UserModel');

const ListUserService = {
    listAll: () => {
        const user1 = new UserModel(
            1,
            "José Abelardo Barbosa de Medeiros",
            12345678901,
            012345,
            98765432,
            "abelardobm@gmail.com",
            "a1b2b3c4"
        )

        const user2 = new UserModel(
            2,
            "Hebe Maria Monteiro de Camargo Ravagnani",
            12346789051,
            122346,
            87654321,
            "hebemcamargo@gmail.com",
            "a1b2b3c4"
        )

        const user3 = new UserModel(
            3,
            "Raul Santos Seixas",
            71829348591,
            917364,
            84956731,
            "raulsseixas@gmail.com",
            "a1b2b3c4"
        )

        return [user1, user2, user3];
    }
}

module.exports = ListUserService;