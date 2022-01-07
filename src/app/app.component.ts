import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isSubmittingOver: boolean = false;
  
  submited() {
    this.isSubmittingOver = true;
  }
}