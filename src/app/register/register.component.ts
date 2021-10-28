import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ServicesService} from 'src/app/services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service:ServicesService) { }

  ngOnInit(): void {}
  showSuccessMessage = false
  // create a new user
  onSubmit(form: NgForm) {
    const username = form.value.username;
    const email = form.value.email;
    const password = form.value.password;
    const c_password = form.value.c_password;

    // check if passwords match
    if (password !== c_password) {
      alert('Passwords do not match');
      return;
    }

    this.service.createUser(username, email, password)
      .subscribe((response) => {
        console.log(response);
        this.showSuccessMessage = true;
      });

    form.reset();

  }
}


