import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { CropService } from './crop.service';
import { Crop } from './crop.entity';

@Crud({
    model: {
        type: Crop,
    },
})
@Controller('Crop')
export class CropController implements CrudController<Crop> {
    constructor(public service: CropService) {}
}
