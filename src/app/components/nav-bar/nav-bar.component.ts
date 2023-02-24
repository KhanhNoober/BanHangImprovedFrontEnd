import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  @Output() openSideBar: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  openSideBarHandler() {
    this.openSideBar.emit();
  }
}
