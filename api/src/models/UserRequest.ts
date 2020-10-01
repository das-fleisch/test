import {Model, DataTypes } from 'sequelize';
import {orm} from '../loaders/sequelize';

interface UserRequestInstance extends Model {
    id?: number;
    query: string;
    response: string;
    status: number;
    createdAt?: Date;
    updatedAt?: Date;
};

export const UserRequest = orm.define<UserRequestInstance>('Request',
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        query: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        response: {
            type: new DataTypes.TEXT,
            allowNull: false,
        },
        status: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        createdAt: {
            field: 'created_at',
            type: DataTypes.DATE,
        },
        updatedAt: {
            field: 'updated_at',
            type: DataTypes.DATE,
        },
    },
    {
        tableName: "requests",
    }
);
