import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { ChecklistService } from 'src/app/services/checklist.service';

export interface CheckListElement {
  name: string;
  position: number;
}
const ELEMENT_DATA: CheckListElement[] = [];

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'action'];
  constructor(private checklistservice: ChecklistService, public router:Router) { 
    checklistservice.getAll({}).then((res:any)=>{
      this.dataSource.data = res.results;
      console.log(this.dataSource.data);
    })
  }

  dataSource = new MatTableDataSource<CheckListElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onItemClick(item)
  {
    const lastSegment = item.split("/").slice(-2)[0];
    this.router.navigate(['portal/checklist/view/'+lastSegment]); 
  }

}
