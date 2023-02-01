import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'usuarios'})
export class UsuarioEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  nome: string;

  @Column()
  cpf: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @Column()
  cep: string;

  @Column({nullable: true})
  logradouro: string;

  @Column({nullable: true})
  bairro: string;

  @Column({nullable: true})
  cidade: string;

  @Column({nullable: true})
  uf: string;
}