import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { NavBarComponent } from './users/nav-bar/nav-bar.component';
import { UsersModule } from './users/users.module';


@NgModule({
  declarations: [],
  imports: [
    UsersModule,
    CommonModule,
    FeatureRoutingModule
  ],
})
export class FeatureModule { }
