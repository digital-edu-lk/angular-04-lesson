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
  }
}
