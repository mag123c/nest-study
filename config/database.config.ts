import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const DatabaseConfig = () =>
  ({
    type: 'mysql',
    host: 'localhost',
    port: 3305,
    username: 'root',
    password: '1234',
    database: 'test',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: false,
    logging: true,
  }) as TypeOrmModuleOptions;
