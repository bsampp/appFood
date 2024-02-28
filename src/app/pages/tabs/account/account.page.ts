import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  orders: any[] = [];
  isLoading: boolean = true;
  model: any = {
    title: 'Nenhum pedido realizado',
    icon: 'basket',
  }
  constructor() { }

  ngOnInit() {
    console.log(this.model)
    setTimeout(() => {
      this.orders = [
        {
          "restaurant": "Dom Henrique",
          "items": [
            {
              "name": "Hamburguer de Frango",
              "price": 15
            },
            {
              "name": "Batata Frita",
              "price": 10
            },
            {
              "name": "Refrigerante",
              "price": 5
            }
          ],
          "total_price": 30,
          "delivery_address": "Rua das Flores, 123",
          "delivery_date": "2024-02-28T20:00:00"
        },
        {
          "restaurant": "Saguis Burguer",
          "items": [
            {
              "name": "Pizza Margherita",
              "price": 20
            },
            {
              "name": "Salada Caesar",
              "price": 12
            },
            {
              "name": "Suco de Laranja",
              "price": 8
            }
          ],
          "total_price": 40,
          "delivery_address": "Avenida Principal, 456",
          "delivery_date": "2024-02-29T20:30:00"
        },
        {
          "restaurant": "042",
          "items": [
            {
              "name": "Taco de Carne",
              "price": 18
            },
            {
              "name": "Nachos",
              "price": 10
            },
            {
              "name": "Margarita",
              "price": 7
            }
          ],
          "total_price": 35,
          "delivery_address": "Travessa das Ruas, 789",
          "delivery_date": "2024-03-01T21:00:00"
        }
      ];
    this.isLoading = false;
    }
    , 2000);
    console.log(this.orders)
  }

}
