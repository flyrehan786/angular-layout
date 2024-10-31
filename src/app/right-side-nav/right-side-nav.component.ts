import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-side-nav',
  templateUrl: './right-side-nav.component.html',
  styleUrls: ['./right-side-nav.component.css']
})
export class RightSideNavComponent implements OnInit {
  @Input() rightSideNavStatus: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
