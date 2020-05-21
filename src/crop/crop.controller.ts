import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { CropService } from './crop.service';
import { Crop } from './crop.entity';
import { CreateCropDto } from './dto/create-crop.dto';
import { UpdateCropDto } from './dto/update-crop.dto';

@Crud({
    model: {
        type: Crop,
    },
    routes: {
        only: [
            'getOneBase',
            'createOneBase',
            'updateOneBase',
            'deleteOneBase',
        ],
    },
    dto: {
        create: CreateCropDto,
        update: UpdateCropDto,
    },
})
@Controller('Crop')
export class CropController implements CrudController<Crop> {
    constructor(public service: CropService) {}
}
