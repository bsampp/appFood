import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-orders',
  templateUrl: './empty-orders.component.html',
  styleUrls: ['./empty-orders.component.scss'],
})
export class EmptyOrdersComponent  implements OnInit {
  @Input() model: any;
  constructor() { }

  ngOnInit() {}

}
