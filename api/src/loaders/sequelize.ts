import { Sequelize } from 'sequelize';
import config from '../config';

export const orm = new Sequelize(config.db.name, config.db.user,config.db.password,{
    host: 'test-db',
    dialect: 'mariadb',
    dialectOptions: {
        useUTC: false,
        timezone: 'Etc/GMT+3',
    },
    timezone: 'Etc/GMT+3'
});