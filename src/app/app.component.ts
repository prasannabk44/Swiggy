import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "seven";
  ngOnInit() {
    var firebaseConfig = {
      apiKey: "AIzaSyC7Oqy__AOrLqGMdexbyny0TtY9UXKRhYI",
      authDomain: "swiggy-7138e.firebaseapp.com",
      databaseURL: "https://swiggy-7138e.firebaseio.com",
      projectId: "swiggy-7138e",
      storageBucket: "swiggy-7138e.appspot.com",
      messagingSenderId: "743435791235",
      appId: "1:743435791235:web:a044044656a417af75a4b6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
