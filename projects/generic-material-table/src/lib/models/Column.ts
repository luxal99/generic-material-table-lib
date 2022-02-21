import { TemplateRef } from '@angular/core';

export interface Column {
  name: string;
  displayedName: string;
  value: string;
  columnType: columnType;
  templateRef?: TemplateRef<any>;
}

type columnType = 'GENERIC' | 'CUSTOM';
