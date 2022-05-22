import { Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../users/entities/User";
import { Game } from "./Game";
@Entity("orders")
export class Order {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @ManyToOne(() => User, (user) => user.orders)
  user: User;

  @ManyToMany(() => Game, (game) => game.orders)
  @JoinTable()
  games: Game[];
}