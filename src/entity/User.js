import {Entity, PrimaryGeneratedColumn,  Unique, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import {MinLength, IsNotEmpy} from 'Class-validator';

@Entity()
@Unique(['username'])
export class User {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
  @MinLegth(6)
  username: string;

  @Column()
  @MinLength(6)
  password: string;

  @Column()
  @IsNotEmpy()
  role: string;

  @Column()
  @CreateDateColumn()
  createdAT: Date;

  @Column()
  @UpdateDateColumn()
  updateAt: Date;

}
