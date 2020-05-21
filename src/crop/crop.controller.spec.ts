import { Test, TestingModule } from '@nestjs/testing';
import { CropController } from './crop.controller';

describe('Crop Controller', () => {
    let controller: CropController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [CropController],
        }).compile();

        controller = module.get<CropController>(CropController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
