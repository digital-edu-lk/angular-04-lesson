import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() user!: string;
  @Output() isAgreeClicked =  new EventEmitter();
  @Output() isDisagreeClicked =  new EventEmitter();
  
  userName: string = '';
  isBtnClicked: boolean = false;

  constructor() {}

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.userName = this.user;
  }

  agreeClick(): void {
    this.isBtnClicked = true;
    this.isAgreeClicked.emit();
  }

  disagreeClick(): void {
    this.isBtnClicked = true;
    this.isDisagreeClicked.emit();
  }
}
