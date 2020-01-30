import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import * as firebase from "firebase";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Component({
  selector: "app-signupp",
  templateUrl: "./signupp.component.html",
  styleUrls: ["./signupp.component.css"]
})
export class SignuppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  constructor(private toaster: ToastrService, private router: Router) {}
  signup(form: NgForm) {
    // console.log(form.value);
    let email = form.value.email; // connects to ng model name attribute //name attribute carries information
    let password = form.value.password;
    let phonenumber = form.value.phonenumber;
    let name = form.value.name;
    // we need to store this information in to firebase database
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userData => {
        userData.user.sendEmailVerification();
        // console.log(userData)
        let message = ` notification has been sent to your ${email} address 😃`;
        this.toaster.success(message);
        this.router.navigate(["/login"]);
        return firebase
          .database()
          .ref("/user" + userData.user.uid)
          .set({
            phonenumber,
            name,
            email,
            password,
            uid: userData.user.uid,
            registrationDate: new Date().toString()
          });
      })
      .catch(err => {
        this.toaster.error(err.message);
        console.log(err);
      });
  }
}
