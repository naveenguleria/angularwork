import { Component, OnInit, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  //Send data to parent component
  @Output() public evenEmitter=new EventEmitter();

  txtVal:string;

  constructor() {
    this.txtVal="Naveen Guleria";
   }

  ngOnInit() {
  }

  logMe(val){
    console.log(val);
  }

  fireEventToParent(){
    console.log("firing event");
    this.evenEmitter.emit("Hey");
  }

}
