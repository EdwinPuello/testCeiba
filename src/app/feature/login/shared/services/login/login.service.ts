import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  /**
  * El nombre de este metodo no debería ser cambiado, pero de ser necesario podrías cambiar la firma
   * */
  url = environment.API
  constructor(private http: HttpClient){

  }
  public login(data) {
    return this.http.post(this.url+'/login',data)
  }
}
