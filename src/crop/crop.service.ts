import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Crop } from './crop.entity';

@Injectable()
export class CropService extends TypeOrmCrudService<Crop> {
    constructor(@InjectRepository(Crop) cropsRepository: Repository<Crop>) {
        super(cropsRepository);
    }
}
