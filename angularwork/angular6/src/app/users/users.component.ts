import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users$: Object;

  errMsg: String;
  constructor(private data: DataService) { }

  ngOnInit() {
    // Way 1: without error handling

    // this.data.getUsers().subscribe(
    //   (data: Object) => {this.users$ = data}
    // );

    // Way 2: With error handling & complete 
    // either erro or complete is called (we can use finally if required)
    // **********************************************************************************
    // Limitations of the subscribe error handler
    // Handling errors using the subscribe call is sometimes all that we need, 
    // but this error handling approach is limited. Using this approach, we cannot, for example,
    // recover from the error or emit an alternative fallback value that replaces the value that 
    // we were expecting from the backend.
    // ***********************************************************************************
    this.data.getUsers().subscribe(
      (data: Object) => { this.users$ = data },
      (err) => {
        console.log(err);
        this.errMsg = err;
      },
      () => { console.log("Finished"); },

    );

    // Way 3: catch error
    // this.data.getUsers().pipe(
    //   tap(heroes => this.log('fetched heroes')),
    //   catchError((err)=>{}))
    // );
    console.log("Method done...");

  }

}
