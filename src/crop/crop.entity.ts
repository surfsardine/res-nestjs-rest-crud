import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Crop {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    name: string;

    @Column({ length: 255 })
    description: string;
}
