import { Component, OnInit } from '@angular/core';

// ვაიმპორტებთ User ინტერფეისს.
import { User } from '../../user';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  // ვქმნით User ტიპის ობიექტების მასივს, დინამიურად შექმნილი შვილი კომპონენტების view-ში გასატანად.
  users: User[] = [
    {
      name: 'Mr. IQ',
    },
    {
      name: 'Ms. Universe',
    },
    {
      name: 'Bombasto'
    }
  ];

  // Define-ს ვუკეთებთ ლოკალურ (სხვა კომპონენტ(ებ)ში არა-გადასაცემ) ცვლადებს.
  agreedSumNum: number = 0;
  disagreedSumNum: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  // ვქმნით ფუნქციებს, რომლებიც გამოძახებული იქნება შვილ კომპონენტში 
  // @Output() დეკორატორით შექმნილი EventEmitter-ების
  // მოსმენისას (Event Binding-ის მეშვეობით),
  // ამ EventEmitter-ების ამოქმედების (ანუ, შვილი კომპონენტიდან და-Emit-ების) შემთხვევაში.
  
  // "agree()" ფუნქცია:
  // 1. 1-ით გაზრდის (increment-ს გაუკეთებს) ამავე კლასის "agreedSumNum" ცვლადის მნიშვნელობას,
  // რომელიც, interpolation-ის {{}} მეშვეობით აისახება view-ში.
  agree() {
    this.agreedSumNum++;
  }

  // "disagree()" ფუნქცია:
  // 1. 1-ით გაზრდის (increment-ს გაუკეთებს) ამავე კლასის "disagreedSumNum" ცვლადის მნიშვნელობას,
  // რომელიც, interpolation-ის {{}} მეშვეობით აისახება view-ში.
  disagree() {
    this.disagreedSumNum++;
  }
}
