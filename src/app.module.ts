import { Module } from '@nestjs/common';
import { UsuarioModule } from './app/usuario/usuario.module';


@Module({
  imports: [
    UsuarioModule

  ]
})
export class AppModule {}
