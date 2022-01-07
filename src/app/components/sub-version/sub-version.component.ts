import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-version',
  templateUrl: './sub-version.component.html',
  styleUrls: ['./sub-version.component.scss']
})
export class SubVersionComponent implements OnInit {

  @Input() next!: any;

  constructor() {}

  ngOnInit(): void {
    console.log(this.next);    
  }
  
  newVersion(): string {
    if (this.next.type == 'primary') {
      return 'Initial value of major set to ' + this.next.data.currentMajor + ', Initial value of minor set to ' + this.next.data.currentMinor;
    } else if (this.next.type == 'nextMinor') {
      return 'minor changed from ' + this.next.data.previousMinor + ' to ' + this.next.data.currentMinor;
    } else if (this.next.type == 'nextMajor') {
      return 'major changed from ' + this.next.data.previousMajor + ' to ' + this.next.data.currentMajor;
    } else {
      return 'Error!';
    }
  }
}