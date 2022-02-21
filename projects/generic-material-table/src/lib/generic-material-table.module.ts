import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MapColumnArrayPipe} from "./pipes/map-column-array.pipe";
import {DynamicPropertyPipe} from "./pipes/dynamic-property.pipe";
import {GenericMaterialTableComponent} from "./generic-material-table.component";

@NgModule({
  declarations: [
    MapColumnArrayPipe,
    DynamicPropertyPipe,
    GenericMaterialTableComponent,
  ],
  exports: [MapColumnArrayPipe, DynamicPropertyPipe, GenericMaterialTableComponent],
  imports: [CommonModule, MatTableModule, MatButtonModule],
})
export class GenericMaterialTableModule {}
