import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular6';
  data:string;

  sendDataToChild:string;

  constructor(){
    this.data="me";
    this.sendDataToChild="CHILD";
  }

}
