import { Component, OnInit } from "@angular/core";


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})

export class LoginComponent implements OnInit {
  constructor() { }
  ngOnInit() { }

  logo = "assets/images/logo-1.jpg";
  hide = true;

  loginWithGoogle() { }
}
