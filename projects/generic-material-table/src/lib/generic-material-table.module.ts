import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { GenericMaterialTableComponent } from './generic-material-table.component';
import { MapColumnArrayPipe } from './pipes/map-column-array.pipe';
import { DynamicPropertyPipe } from './pipes/dynamic-property.pipe';

@NgModule({
  imports: [CommonModule, MatTableModule, MatButtonModule],
  declarations: [
    MapColumnArrayPipe,
    DynamicPropertyPipe,
    GenericMaterialTableComponent,
  ],
  exports: [
    MapColumnArrayPipe,
    MatTableModule,
    MatButtonModule,
    DynamicPropertyPipe,
    GenericMaterialTableComponent,
  ],
})
export class GenericMaterialTableModule {}
