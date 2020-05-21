import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CropModule } from './crop/crop.module';
import { Crop } from './crop/crop.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: '../crops.db',
            entities: [Crop],
            synchronize: true,
        }),
        CropModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
