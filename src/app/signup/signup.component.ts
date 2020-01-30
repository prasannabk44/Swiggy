import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";
import { NgForm } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  constructor(private toastr: ToastrService, private router: Router) {}
  signup(form: NgForm) {
    let email = form.value.email;
    let password = form.value.password;

    //we need to store this in firebase database
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userdata => {
        userdata.user.sendEmailVerification();
        let message = `${email} notification has been sent to your email address please verify`;
        this.toastr.success(message);
        this.router.navigate["/login"];
      })
      .catch(err => {
        this.toastr.error(err.message);
      });
  }

  ngOnInit() {}
}
