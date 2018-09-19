import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  currentUrl: string;

 constructor(private router: Router) {
   
    // router.events.subscribe((_: NavigationEnd) => {
    //   this.currentUrl = _.url
    //   console.log("HEYYYYY: "+this.currentUrl);
    // });
    router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.currentUrl = e.url;
       console.log("HEYYYYY: "+this.currentUrl);
      }
    });
  }

  ngOnInit() {
  }

}
