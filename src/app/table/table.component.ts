import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit{
    
  displayedColumns: string[] = ['id', 'name', 'position', 'company'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  name: string;
  id: number;
  position: string;
  company: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Anoop', position: 'Developer', company: 'MMH Company'},
  {id: 2, name: 'Manu', position: 'flutter', company: 'MH Company'},
  {id: 3, name: 'Aju', position: 'Developer', company: 'SMH Company'},
  {id: 4, name: 'karthik', position: 'Software Tester', company: 'HH Company'},
  {id: 5, name: 'paul', position: 'flutter', company: 'MMH Company'},
  {id: 6, name: 'anu', position: 'Developer', company: 'MMH Company'},
  {id: 7, name: 'joseph', position: 'Developer', company: 'MMH Company'},
  {id: 8, name: 'Abi', position: 'Developer', company: 'SBH Company'},
  {id: 9, name: 'Abishak', position: 'Developer', company: 'MNMH Company'},
  {id: 10, name: 'vimal', position: 'Developer', company: 'MMHN Company'},
  {id: 11, name: 'sanjay', position: 'Developer', company: 'MMHH Company'},
  {id: 12, name: 'libin', position: 'flutter', company: 'MMHP Company'},
  {id: 13, name: 'Akhil', position: 'Software tester', company: 'MMH Company'},
  {id: 14, name: 'Ajesh', position: 'Developer', company: 'MMHP Company'},
  {id: 15, name: 'Ashwin', position: ' java Developer', company: 'PMMH Company'},
  {id: 16, name: 'Aravind', position: 'python Developer', company: 'LMMH Company'},
  {id: 17, name: 'Ajeshhh', position: 'python Developer', company: 'IMMH Company'},
  {id: 18, name: 'Anoopp', position: 'python Developer', company: 'YMMH Company'},
  {id: 19, name: 'Anooppp', position: 'Developer', company: 'MMH Company'},
  {id: 20, name: 'Anooppppp', position: 'python Developer', company: 'MMH Company'},
  
];