import {Component, Input, OnInit} from '@angular/core';
import {Column} from "./models/Column";
@Component({
  selector: 'lib-generic-material-table',
  templateUrl: "./generic-material-table.component.html",
  styleUrls: ['./generic-material-table.component.css'],
})
export class GenericMaterialTableComponent implements OnInit {
  @Input() dataSource: any[] = [];
  @Input() displayedColumns: Column[] = [];

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.displayedColumns)
  }
}
