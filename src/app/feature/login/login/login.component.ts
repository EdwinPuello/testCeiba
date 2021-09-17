import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { StorageService } from 'src/app/services/storage.service';
import { LoginService } from '../shared/services/login/login.service';
export interface login {
  token:string
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit{
  form =  new FormGroup({ 
    email: new FormControl('', Validators.required),
    password: new FormControl('',[Validators.required,Validators.minLength(8)]),
  });
  errorFound = ""
  constructor(
    private api: GlobalService,
    private readonly router: Router,
    private storage:StorageService,
    private apiLogin: LoginService
  ) {
    if(this.storage.getToken()){
      this.router.navigateByUrl('/users/list');
    }
  }
  ngOnInit(): void {

  }

  btnLogin(){
    if(this.form.valid){
      this.apiLogin.login({ username: this.form.controls.email.value, password: this.form.controls.password.value}).subscribe((d:login)=>{
        this.storage.guardarToken(d.token)
        this.redirectUsers()
      },erro=>{
        this.errorFound = erro.error.error
        setTimeout(() => {
          this.errorFound = ""
        }, 3000);
      })
    }else{
      alert("Completa el formulario")
     }
  }



  /**
   * Este método no se puede modificar
   * */
  public redirectUsers(): void {
    this.router.navigateByUrl('/users/list');
  }

}
