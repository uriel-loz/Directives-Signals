import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalsRoutingModule } from './signals-routing.module';
import { SignalsComponent } from './layout/signals/signals.component';
import { CounterComponent } from './pages/counter/counter.component';
import { PropertiesComponent } from './pages/properties/properties.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';

@NgModule({
  imports: [
    CommonModule,
    SignalsRoutingModule
  ],
  declarations: [
    SignalsComponent,
    CounterComponent,
    PropertiesComponent,
    UserInfoComponent
  ]
})
export class SignalsModule { }
