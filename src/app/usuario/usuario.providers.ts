import { UsuarioEntity } from './usuario.entity';
import { DataSource } from 'typeorm';

export const UsuarioProviders = [

    {
        provide: 'USUARIO_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(UsuarioEntity),
        inject: ['DATA_SOURCE'],
    },
];
