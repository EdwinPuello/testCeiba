import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { UsersService } from '../create-user/shared/services/users/users.service';
interface Usuarios {
  data:{
    avatar: string;
    email: string;
    first_name: string;
    id: number;
    last_name: string
  }
  page:number;
  total_pages:number
  total:number;
}
@Component({
  selector: 'list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})

export class ListUsersComponent implements OnInit {
  usersList:any = []
  paginaActual: number = 1;
  userDelete = null
  usersListPage: Usuarios;
  userDataPageInfo:any = {};
  filterPost = ''
  constructor(private apiGlobal:GlobalService,private apiUsers:UsersService){
  }

  ngOnInit(){
    this.listarUsiarios(false)
  }

  borrar(item,pos:number){
    this.apiUsers.deleteUserForIndex(item.id).subscribe(()=>{
      this.usersList.splice(pos,1)
      this.userDelete = item
            setTimeout(() => {
        this.userDelete = null
      }, 6000);
    })
  }

  listarUsiarios(page:any){

    if(page && this.userDataPageInfo){
      this.paginaActual = this.userDataPageInfo.page + 1
    }else if(!page && this.usersList.length > 0){
      this.paginaActual = this.userDataPageInfo.page - 1
    }

    this.apiGlobal.listUser(this.paginaActual).subscribe((response:Usuarios)=>{
      this.usersList = response.data
      this.userDataPageInfo = response
    })

  }



}
