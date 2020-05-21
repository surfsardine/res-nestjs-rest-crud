import { Module } from '@nestjs/common';
import { CropModule } from './crop/crop.module';

@Module({
    imports: [CropModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
