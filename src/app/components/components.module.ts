import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { IonicModule } from '@ionic/angular';
import { LoadingRestaurantComponent } from './loading-restaurant/loading-restaurant.component';
import { EmptyScreenComponent } from './empty-screen/empty-screen.component';
import { EmptyOrdersComponent } from './empty-orders/empty-orders.component';
import { OrdersComponent } from './orders/orders.component';
import { LoadingOrdersComponent } from './loading-orders/loading-orders.component';



@NgModule({
  declarations: [RestaurantComponent, LoadingRestaurantComponent, EmptyScreenComponent, EmptyOrdersComponent, OrdersComponent, LoadingOrdersComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[RestaurantComponent, LoadingRestaurantComponent, EmptyScreenComponent, EmptyOrdersComponent, OrdersComponent, LoadingOrdersComponent]
})
export class ComponentsModule {}
