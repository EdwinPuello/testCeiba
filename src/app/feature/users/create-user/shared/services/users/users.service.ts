import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { observable, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { getUserModel } from 'src/app/model/getUser.model';
/**
 * El nombre de las clases o métodos no se pueden cambiar
 * */
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  url = environment.API
  headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
  constructor(private _http: HttpClient) {
    if(localStorage.getItem('token') != undefined && localStorage.getItem('token') != "" && localStorage.getItem('token') != null)
      {
        this.headers =  this.headers.append('token', localStorage.getItem('token'));
      }
  }

  public getUsers(): Observable<getUserModel> {
    return this._http.get<getUserModel>(this.url+'/users?page=1',{headers:this.headers})
  }

  createUser(data): Observable<any>  {
    return this._http.post(this.url+'/users',data,{headers:this.headers})
  }

  deleteUserForIndex(index: number) {
    return this._http.delete(this.url+'/users/'+index,{headers:this.headers})
  }
}


