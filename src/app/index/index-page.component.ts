import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css']
})
export class IndexPageComponent {
  constructor(private router: Router) {
  }

  // tslint:disable-next-line:typedef
  show() {
    this.router.navigate(['/login']);
  }
}

