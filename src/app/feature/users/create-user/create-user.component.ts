import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from './shared/services/users/users.service';
interface created {
  createdAt:number;
  id:number
  job:number;
  name:number;
}
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  form =  new FormGroup({ 
    name: new FormControl('', Validators.required),
    job: new FormControl('',Validators.required),
  });
  infoUserCreate: created;
  constructor(
    private readonly router: Router,
    private api:UsersService
  ) {
  }
  ngOnInit(): void {
 
  }
  
  create(){
   if(this.form.valid){
     this.api.createUser({name:this.form.controls.name.value,job:this.form.controls.job.value}).subscribe((response:created)=>{   
      this.infoUserCreate = response
      //despues de 6seg redirecciona a listado
      setTimeout(() => {
        this.redirectToListUsers()
      }, 6000);
    },erro=>{
      alert(erro)
    })
   }else{
     alert("Completa el formulario")
   }
  }

  /**
   * Este método no se puede modificar
   * */
  public redirectToListUsers(): void {
    this.router.navigateByUrl('/users/list');
  }
}
