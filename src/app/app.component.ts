import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  openSideBar: boolean = false;

  openSideBarHandler() {
    this.openSideBar = !this.openSideBar;
  }
}
