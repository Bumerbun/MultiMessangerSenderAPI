import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class KeyboardType{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text', {nullable: false, unique:true})
    name: string
}