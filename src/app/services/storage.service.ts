import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getToken(){
    let data = localStorage.getItem("token")
    return data != null && data != "" ?  data : null
  }

  clearToken(){
    localStorage.removeItem("token")
  }

  guardarToken(token){
    localStorage.setItem('token',token)
  }

}
