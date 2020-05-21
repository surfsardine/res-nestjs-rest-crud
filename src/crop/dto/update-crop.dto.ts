import { ApiProperty } from '@nestjs/swagger';

export class UpdateCropDto {
    @ApiProperty({ maxLength: 255, required: false })
    name?: string;

    @ApiProperty({ maxLength: 255, required: false })
    description?: string;
}
