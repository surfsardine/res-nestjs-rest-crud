import { ApiProperty } from '@nestjs/swagger';

export class CreateCropDto {
    @ApiProperty({ maxLength: 255 })
    name: string;

    @ApiProperty({ maxLength: 255, required: false })
    description?: string;
}
