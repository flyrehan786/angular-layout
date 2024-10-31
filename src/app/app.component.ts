import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  leftSideNavStatus: boolean = false;
  rightSideNavStatus: boolean = false;
  title = 'ng-nav-sidebar';
}
