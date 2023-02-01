import { Controller, Get } from "@nestjs/common";
import { UsuarioService } from "./usuario.service";

@Controller('usuarios')
export class UsuarioController{
    constructor(
        private readonly usuarioService: UsuarioService
    ){}

    /* @Get()
    @Roles(Role.Admin)
    async findAll(){
        return (await(await this.usuarioService.findAll()).map(x => new ListaUsuarioDto(x)));
    } */
}