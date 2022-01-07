import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-version',
  templateUrl: './sub-version.component.html',
  styleUrls: ['./sub-version.component.scss']
})
export class SubVersionComponent implements OnInit {

  @Input() version!: any;

  constructor() {}

  ngOnInit(): void {
  }
  
  newVersion(): string {
    if (this.version.type == 'primary') {
      return 'Initial value of major set to ' + this.version.data.currentMajor + ', Initial value of minor set to ' + this.version.data.currentMinor;
    } else if (this.version.type == 'nextMinor') {
        return 'minor changed from ' + this.version.data.previousMinor + ' to ' + this.version.data.currentMinor;
    } else if (this.version.type == 'nextMajor') {
        return 'major changed from ' + this.version.data.previousMajor + ' to ' + this.version.data.currentMajor;
    } else {
        return 'Error!';
    }
  }
}