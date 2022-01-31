import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Country } from '../countries/country.entity';

@Entity()
export class User {
  constructor(name: string, email: string, password: string, country: string) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.country = country;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  country: string;

  @ManyToMany(() => Country)
  @JoinTable()
  countries: Country[];
}
