import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './../service/user-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  urlLogo: string;
  isNotLoggedUser: boolean;

  constructor(private router: Router, private userService: UserService) {
    this.urlLogo = '../assets/logo.png';
    this.isNotLoggedUser = !!userService.isLogged();
  }

  ngOnInit(): void {}

  logout() {
    this.userService.clearUserData();
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }
}
