import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { CreateUserComponent } from './create-user/create-user.component';
import { UsersService } from './create-user/shared/services/users/users.service';
import { HomeUserComponent } from './home-user/home-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UsersRoutingModule } from './users-routing.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        UsersRoutingModule,
        SharedModule,
        ReactiveFormsModule
    ],
    providers:[UsersService],
    declarations:[HomeUserComponent,NavBarComponent,ListUsersComponent,CreateUserComponent],
     exports:[HomeUserComponent,NavBarComponent,ListUsersComponent,CreateUserComponent]

})
export class UsersModule {
}
