import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';

import { UserService } from './../service/user-service';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const url = state.url;
    const isLogged = this.userService.isLogged();

    if (!isLogged && state.url !== '/') {
      this.router.navigate(['/']);

      return false;
    }

    if (isLogged && state.url === '/') {
      this.router.navigate(['/list']);

      return false;
    }

    return true;
  }
}
