import { Sequelize } from 'sequelize';

import { UserModel } from '../app/models/Users/UserModel';

import databaseConfig from '../config/database';

const models = [UserModel];

class Database {
    constructor() {
        this.init();
    }
    init() {
        this.connection = new Sequelize(databaseConfig);

        models.map(model => model.init(this.connection));
    }
}
