import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeUserComponent } from './users/home-user/home-user.component';
import { TokenGuard } from '@core/guard/token/token.guard';
import { LoginComponent } from './login/login/login.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { CreateUserComponent } from './users/create-user/create-user.component';

const routes: Routes = [
  {
    path: 'login',
    component:LoginComponent,
    // canActivate: [TokenGuard],
    loadChildren: () => import('./login/login.module').then(i => i.LoginModule),
  },
  {
    path: 'users',
    component: HomeUserComponent,
    canActivate: [TokenGuard],
    loadChildren: () => import('./users/users.module').then(i => i.UsersModule),
    children:[
      {
        path: 'list',
        component: ListUsersComponent,
        // canActivate: [TokenGuard],
        loadChildren: () => import('./users/users.module').then(i => i.UsersModule),
      },
      {
        path: 'create',
        component: CreateUserComponent,
        // canActivate: [TokenGuard],
         loadChildren: () => import('./users/users.module').then(i => i.UsersModule),
      }
    ]
  }, 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {
}
