import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CropController } from './crop.controller';
import { CropService } from './crop.service';
import { Crop } from './crop.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Crop]),
    ],
    controllers: [CropController],
    providers: [CropService],
})
export class CropModule {}
