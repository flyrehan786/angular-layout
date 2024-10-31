import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() leftSideNavToggled = new EventEmitter<boolean>();
  @Output() rightSideNavToggled = new EventEmitter<boolean>();
  leftMenuStatus: boolean = false;
  rightMenuStatus: boolean = false;
  constructor() { }
  ngOnInit(): void {
  }
  leftSideNavToggle() {
    this.leftMenuStatus = !this.leftMenuStatus;
    this.leftSideNavToggled.emit(this.leftMenuStatus)
  }
  rightSideNavToggle() {
    this.rightMenuStatus = !this.rightMenuStatus;
    this.rightSideNavToggled.emit(this.rightMenuStatus)
  }
}
