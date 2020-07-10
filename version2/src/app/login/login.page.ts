import { RouterModule } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Form,
  AbstractControl,
} from "@angular/forms";
import { NavController, NavParams } from "@ionic/angular";
import { Router } from "@angular/router";
@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  Login: FormGroup;
  email: AbstractControl;
  showPassword = false;
  passwordToggleIcon = "eye";
  togglePassword(): void {
    this.showPassword = !this.showPassword;
    if (this.passwordToggleIcon == "eye") {
      this.passwordToggleIcon = "eye-off";
    } else {
      this.passwordToggleIcon = "eye";
    }
  }
  error_message = {
    email: [
      { type: "required", message: "Email is required." },
      { type: "pattern", message: "Please enter a valid email." },
    ],
    password: [
      { type: "required", message: "Password is required." },
      {
        type: "minlength",
        message: "Password must be at least 8 characters long.",
      },
    ],
  };
<<<<<<< HEAD
  constructor(public nav: NavController) {
=======
  constructor(public router: Router) {
>>>>>>> 84f979ca3d61fe26d9a1f4e14caae765d49b4597
    this.Login = new FormGroup({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),
        ])
      ),
      password: new FormControl(
        "",
        Validators.compose([Validators.minLength(8), Validators.required])
      ),
    });
  }
  btnclicked() {
    this.router.navigateByUrl("tabnav");
  }

  gotoHome() {
    this.nav.navigateForward(["/home"]);
  }

  ngOnInit() {}
}
