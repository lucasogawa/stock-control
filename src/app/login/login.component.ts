import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from './../model/user';
import { UserService } from './../service/user-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  user!: User;

  constructor(private router: Router, private service: UserService) {}

  ngOnInit(): void {
    this.user = new User('', '', '');
  }

  reset() {
    this.form.reset();
  }

  onSubmit() {
    this.service
      .getByUsernameAndPassword(this.user.username, this.user.password)
      .subscribe((data: User[]) => {
        if (!data || data.length == 0) {
          alert('Username or Password invalid!');
        } else {
          this.service.saveUserData(data[0]);
          this.router.navigate(['/list']).then(() => {
            window.location.reload();
          });
        }
      });
  }
}
