import { Controller, Get } from '@nestjs/common';
import { LabelsService } from './labels.service';

@Controller('labels')
export class LabelsController {
  constructor(private readonly LabelsService: LabelsService) {}
  @Get()
  getAllLabels() {
    return this.LabelsService.getLabels();
  }
}
