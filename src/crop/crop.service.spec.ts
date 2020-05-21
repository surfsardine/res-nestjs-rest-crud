import { Test, TestingModule } from '@nestjs/testing';
import { CropService } from './crop.service';

describe('CropService', () => {
    let service: CropService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [CropService],
        }).compile();

        service = module.get<CropService>(CropService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
