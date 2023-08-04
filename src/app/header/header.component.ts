import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  ngOnInit(): void{
    
  }
  // user defined event - toggle=new EventEmitter();

  //@Output() - child to parent component communication.
  @Output() toggle=new EventEmitter();

  menuiconclicked(){
  this.toggle.emit()
  //emit () - emits an event containing a given value.
  }

}
