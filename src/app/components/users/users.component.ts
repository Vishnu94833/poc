import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';
import { UsersModel } from 'src/app/models/users.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @Output() userIdEmit  = new EventEmitter()

  private vm : UsersModel = new UsersModel(); 

  constructor(
    private usersService:UsersService,
    private route:Router) { }

  ngOnInit() {
    let data = Array<UserModel>();
    this.usersService.getUsers().subscribe((res:any) => {
      data = res;
      this.vm.userData  = this.usersService.bindUsers(data)
    })
  }


  getUserDetails(res:any){
    this.route.navigateByUrl('user-details/'+res.id)
  }
  

}
