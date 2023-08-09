import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test-app';
  routes = [{ path: 'dashboard', icon: 'dashboard', title: 'Dashboard' }];
}
