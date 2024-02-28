import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-orders',
  templateUrl: './loading-orders.component.html',
  styleUrls: ['./loading-orders.component.scss'],
})
export class LoadingOrdersComponent  implements OnInit {
  dummy = Array(10);
  constructor() { }

  ngOnInit() {}

}
