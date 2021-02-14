import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  username: string;

  constructor() {
  }

  onSubmit() {
    if (this.username) {
      sessionStorage.setItem('username', this.username);
      console.log(sessionStorage.getItem('username'));
    }
  }

  ngOnInit(): void {
  }

}
