import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/loginservice/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthHomeGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.authService.getAuthenticated() === 'true') {
      console.log('Aunteticado', this.authService.getAuthenticated());
      this.router.navigate(['/home']);
      return true;
    } else {
      return true;
    }
  }
}
