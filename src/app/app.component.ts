import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  url = 'http://blog.miniasp.com/';
  imgurl = '/assets/images/logo.png';
  searchValue = '';

  constructor() {
  }

  changeTitle(altKey: boolean) {
    if (altKey) {
      this.title  = 'The Will Will Web';
    }
  }

  changeSearch(inputSearchValue: string, inputKey: string) {
    if (inputKey === 'Escape') {
      this.searchValue = '';
    } else {
      this.searchValue = inputSearchValue;
    }
  }
}
