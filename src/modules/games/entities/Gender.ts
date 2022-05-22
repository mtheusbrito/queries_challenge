import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Game } from "./Game";

@Entity("genders")
export class Gender {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  name: string;

  @ManyToMany(() => Game, (game) => game.genders)
  @JoinTable()
  games: Game[];
}