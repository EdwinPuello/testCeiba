import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private _http: HttpClient) { }

  getQuery( urlaApi: string, type: string,  authorization: boolean, body?: any ) {
    
    const url = environment.API + urlaApi 
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' });

    if (authorization)
    {
      if(localStorage.getItem('token') != undefined && localStorage.getItem('token') != "" && localStorage.getItem('token') != null)
      {
        headers =  headers.append('token', localStorage.getItem('token'));
      }
    }

    if (type == 'get'){
      return this._http.get(url, { headers: headers })
    }  
    else if (type == 'post'){
      return this._http.post(url, body, { headers: headers });
    } 
    else if(type == 'delete'){
      let httpOptions = { headers : headers, body : body }
      return  this._http.delete( url, httpOptions )
    } 
    else{
      return this._http.put(url, body, { headers: headers });
    }
  }

  login(body: any) {
    return this.getQuery('/login', 'post', false, body)
  }

  listUser(page:number){
    return this.getQuery('/users?page='+page, 'get', true)
  }

  borrarUsuario(id){
    return this.getQuery('/users/'+id, 'delete', true)
  }

}
