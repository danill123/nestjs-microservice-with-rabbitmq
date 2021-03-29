import { Sequelize } from 'sequelize-typescript';
import { User } from './model/user.entity';

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async() => {
            const sequelize = new Sequelize({
                dialect: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '',
                database: 'nest',
            })
            sequelize.addModels([User])
            await sequelize.sync();
            return sequelize;
        }
    }
]