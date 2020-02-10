import {
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn
} from 'typeorm';

/**
 * The Patient model is one of the simple models in the example.
 */
@Entity()
export default class Patient {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
