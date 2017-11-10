import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {User} from '../user';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class UserNewComponent implements OnInit {
  @Output() createNewUserEvent = new EventEmitter();
  newUser = new User;

  constructor() { }

  ngOnInit() {
  }

  create() {
    this.createNewUserEvent.emit(this.newUser);
    this.newUser = new User();
  }
}
