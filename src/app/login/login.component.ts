import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServicesService } from 'src/app/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:ServicesService, private router: Router) { }
  message: any;
  ngOnInit(): void {}
  loginUser(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;
    this.service.loginUser(username, password).subscribe(
      (response) => {
        console.log(response);
        // this.token = response;
        //   // console.log(this.token.token);
        //   // check if reponse token is undefined
        //   if (this.token.token === undefined) {
        //     this.displayAlert = true;
        //   } else {
        //     localStorage.setItem('token', this.token.token);
        //     this.displayAlert = false;
        //     // redirect to todos page
        //     this.router.navigateByUrl('/todos');
        //   }
        this.router.navigateByUrl('/dashboard');
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
