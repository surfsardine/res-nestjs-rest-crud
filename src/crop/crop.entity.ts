import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Crop {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ maxLength: 255 })
    @Column({ length: 255 })
    name: string;

    @ApiProperty({ maxLength: 255 })
    @Column({ length: 255, nullable: true })
    description: string;
}
