import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "free-ed-app-frontend";

  constructor(private router: Router) {}

  ngOnInit() {
    const token = localStorage.getItem("token");
    if (!token) {
      this.router.navigate(["/login"]);
    }
  }
}
