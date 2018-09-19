import { Component, OnInit } from '@angular/core';
import { GitService } from './git.service';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent implements OnInit {

  gitUser: Object;
  userName: string;

  constructor(private git: GitService) {
    this.userName = "naveenguleria";
  }

  ngOnInit() {
  }

  getGitUser() {
    console.log("GITTTT COMPONENT " + this.userName);
    this.git.getGitUser(this.userName).subscribe((resp) => {
      this.gitUser = resp;
    });
  }

}
