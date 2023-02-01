import { DatabaseModule } from './../../database/database.module';
import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { UsuarioProviders } from './usuario.providers';
import { UsuarioService } from './usuario.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UsuarioController],
  providers: [...UsuarioProviders, UsuarioService],
  exports: [UsuarioService],
})
export class UsuarioModule { }
