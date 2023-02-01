import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
//import { CriaUsuarioDto } from './dto/cria-usuario.dto';
import { UsuarioEntity } from './usuario.entity';

@Injectable()
export class UsuarioService {

    constructor(
        @Inject('USUARIO_REPOSITORY')
        private readonly usuarioRepository: Repository<UsuarioEntity>
    ) { }

    async findAll() {
        return await this.usuarioRepository.find();
    }

    async findOneOrFail(id: number) {
        try {
            return await this.usuarioRepository.findOneOrFail({ where: { id: id } });
        } catch (error) {
            throw new NotFoundException('Usuario não encontrado');
        }
    }

    async findEmailOrFail(email: string) {
        try {
            return await this.usuarioRepository.findOneOrFail({ where: { email: email } });
        } catch (error) {
            throw new NotFoundException('Usuario não encontrado');
        }
    }

/*     async create(data: CriaUsuarioDto) {
        const emailValid = await this.usuarioRepository.findOne({where: {email : data.email}})
        if(emailValid != null){
            throw new BadRequestException(`Email ja cadastrado no sistema`);
        }

        return await this.usuarioRepository.save(this.usuarioRepository.create(data));
    } */

    async update(id: number, data) {
        const usuario = await this.findOneOrFail(id);
        this.usuarioRepository.merge(usuario, data);
        return await this.usuarioRepository.save(usuario);
    }

    async deleteById(id: number) {
        await this.findOneOrFail(id);
        await this.usuarioRepository.softDelete(id);
    }

   /*  async updateAdmin(id: number) {
        let usuario = await this.findOneOrFail(id);

        if (usuario.roles == 'admin') {
            throw new BadRequestException(`Usuario ${usuario.name} ja possui a role admin`);
        }

        usuario.roles = Role.Admin;
        return await this.usuarioRepository.save(usuario);
    } */
}
