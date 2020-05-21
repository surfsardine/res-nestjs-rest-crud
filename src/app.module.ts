import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CropModule } from './crop/crop.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: '../crops.db',
            entities: [__dirname + '/**/*.entity.ts'],
            synchronize: true,
        }),
        CropModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
