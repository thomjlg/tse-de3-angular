import { Component, OnInit } from '@angular/core';
import { USERS } from '../users-list';
import { User } from '../user';


@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = USERS;
  selectedUser?: User;

  constructor() { }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  ngOnInit(): void {
  }

}
