import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  constructor(public router: Router) {}

  ngOnInit() {}

  goToTempPage() {
    this.router.navigate(["temperature"]);
  }

  goToLumPage() {
    this.router.navigate(["luminosidade"]);
  }
  goToUmiPage() {
    this.router.navigate(["umidade"]);
  }
  goToSonPage() {
    this.router.navigate(["alerta-sonoro"]);
  }
  goToMonPage() {
    this.router.navigate(["monitoramento"]);
  }
}
