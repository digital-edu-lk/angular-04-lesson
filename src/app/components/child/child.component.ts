import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  // Declare-ს ვუკეთებთ მშობელი კომპონენტიდან გადმოსაცემ ცვლადს,
  // რომელსაც, მშობელ კომპონენტში განსაზღვრული მნიშვნელობა მიენიჭება
  // ამ შვილ კომპონენტში ngOnChanges() lifecycle hook-ის გამოძახების დროს (ანუ, Defined გახდება).
  @Input() user!: string;

  // ვქმნით EventEmitter-ებს,
  // რომლებსაც მოუსმენს მშობელი კომპონენტი და ამ EventEmitter-ების ამოქმედების 
  // (ანუ, და-Emit-ების) შემთხვევაში,
  // შესაბამისად იმოქმედებს (ჩვენს შემთხვევაში, თავისივე კლასში
  //  შექმნილ ფუნქციებს გამოიძახებს).
  @Output() isAgreeClicked =  new EventEmitter();
  @Output() isDisagreeClicked =  new EventEmitter();
  
  // Define-ს ვუკეთებთ ლოკალურ (სხვა კომპონენტ(ებ)ში არა-გადასაცემ) ცვლადებს.
  userName: string = '';
  isBtnClicked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.userName = this.user;
  }

  // ვქმნით ფუნქციებს, რომლებიც გამოძახებული იქნება ღილაკზე click event-ის ამოქმედების მომენტში.
  // ეს ფუნქციები:
  // 1. true მნიშვნელობას მიანიჭებს ამავე კლასის "isBtnClicked" boolean ტიპის ცვლადს, რა დროსაც
  // HTML button tag-ს ("Agree"-საც და "Disagree"-საც) მიენიჭება ატრიბუტი - Disabled
  // 2. აამოქმედებს შესაბამის EventEmitter-ს (რომელსაც უსმენს მშობელი კომპონენტი).
  agreeClick() {
    this.isBtnClicked = true;
    this.isAgreeClicked.emit();
  }

  disagreeClick() {
    this.isBtnClicked = true;
    this.isDisagreeClicked.emit();
  }
}
