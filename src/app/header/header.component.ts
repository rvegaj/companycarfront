import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService} from '../services/loginservice/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router, private login: TokenStorageService) {}

  ngOnInit(): void {}

  // tslint:disable-next-line:typedef
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
  // tslint:disable-next-line:typedef
  logOut() {
    console.log('this.login.signOut()');
    this.login.signOut();
    this.router.navigate(['/']);
  }
}
