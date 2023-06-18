import { Injectable } from '@nestjs/common';
import { Label } from './label.model';

@Injectable()
export class LabelsService {
  private labels: Label[] = [
    {
      id: 'pork',
      label: 'Pork',
    },
    {
      id: 'seafood',
      label: 'Seafood',
    },
    {
      id: 'kids',
      label: 'Kids',
    },
    {
      id: 'chicken',
      label: 'Chicken',
    },
    {
      id: 'beef',
      label: 'Beef',
    },
    {
      id: 'vegetarian',
      label: 'Vegetarian',
    },
    {
      id: 'breakfast',
      label: 'Breakfast',
    },
  ];
  getLabels() {
    return [...this.labels];
  }
}
