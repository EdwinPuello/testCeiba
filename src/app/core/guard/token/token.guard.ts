import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/services/storage.service';

@Injectable({
  providedIn: 'root',
})
export class TokenGuard implements CanActivate {
  
  constructor(private storage: StorageService, private router: Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    if(this.storage.getToken()){
      
      return true
    }

    this.router.navigate(['/login']); // go to login if not authenticated
      return false;
    }
  
  
}
