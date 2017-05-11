import { Component } from '@angular/core';
import 'rxjs/Rx'; // For methods for Observables

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
  }
}
