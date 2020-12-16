import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DweetService } from 'src/app/services/dweet.service';
import Dweet from 'src/models/dweet';

@Component({
  selector: 'app-monitoramento',
  templateUrl: './monitoramento.page.html',
  styleUrls: ['./monitoramento.page.scss'],
})
export class MonitoramentoPage implements OnInit {
  private dweet: Dweet;
  private isLoading: boolean = true;
  private time: any;
  options: Object;

  constructor(private dweetService: DweetService, public router: Router) {
    this.time = setInterval(() => {
      this.getLastDweets();
    }, 3000);
  }

  ngOnInit() {
    this.getLastDweets();
  }

  ngOnDestroy() {
    clearInterval(this.time);
  }

  goBack() {
    this.router.navigate(["home"]);
  }

  private getLastDweets() {
    this.dweetService.loadLastDweets().subscribe(
      (data) => {
        this.preencherDweet(data);
      },
      (err) => {
        console.log("Erro: ", err);
      },
      () => (this.isLoading = false)
    );
  }

  private preencherDweet(data: any) {
    this.dweet = this.dweetService.preencherDweet(data);
  }
}
