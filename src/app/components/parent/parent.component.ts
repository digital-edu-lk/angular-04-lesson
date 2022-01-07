import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { User } from '../../user';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  users: User[] = [
    {
      id: 1,
      name: 'Mr. IQ',
    },
    {
      id: 2,
      name: 'Ms. Universe',
    },
    {
      id: 3,
      name: 'Bombasto'
    }
  ];

  @Output() submittingDone = new EventEmitter();

  usersTotalNumber: number = 0;
  agreedTotalNumber: number = 0;
  disagreedTotalNumber: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.getUsersTotalNumber()
  }

  agree() {
    this.agreedTotalNumber++;
    this.isUsersEmpty();
  }

  disagree() {
    this.disagreedTotalNumber++;
    this.isUsersEmpty();
  }

  getUsersTotalNumber(): void {
    for (let item of this.users) {
      this.usersTotalNumber++;
    }
  }

  isUsersEmpty(): void {
    if (this.usersTotalNumber > 0) {
      this.usersTotalNumber--;
      if (this.usersTotalNumber == 0) {
        console.log('Submitting is over!')
        this.submittingDone.emit();
      } else {
        //
      }
    } else {
      //
    }
  }
}