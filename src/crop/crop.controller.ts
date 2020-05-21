import { Controller } from '@nestjs/common';
import { CropService } from './crop.service';

@Controller('Crop')
export class CropController {
    constructor(private readonly cropService: CropService) {}
}
