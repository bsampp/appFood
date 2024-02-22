import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  orders: any[] = [];
  isLoading: boolean = false;
  model: any = {
    title: 'Nenhum pedido realizado',
  }
  constructor() { }

  ngOnInit() {
    console.log(this.model)
  }

}
