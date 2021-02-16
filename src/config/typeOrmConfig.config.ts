import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'nestAuth',
  synchronize: true,
  logging: false,
  entities: ['dist/entities/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
};
