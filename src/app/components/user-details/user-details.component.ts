import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  private userData:UserModel = new UserModel();
  constructor(private usersService:UsersService, private postService:PostService,
    private route:Router) { }

  ngOnInit() {
    let id = parseInt((this.route.url).split('/')[2]);
    
    this.getUserDetails(id);
  }


  getUserDetails(response:number){
    this.usersService.getUserById(response).subscribe((res:any)=>{
      this.userData.id = res.id;
      this.userData.name = res.name;
      this.userData.username = res.username;
      this.userData.email = res.email;
      this.userData.address.street = res.address.street;
      this.userData.address.suite = res.address.suite;
      this.userData.address.city = res.address.city;
      this.userData.address.zipcode = res.address.zipcode;
      this.userData.phone = res.phone;
      this.userData.website = res.website;
      this.userData.company.name = res.company.name;
      this.userData.company.catchPhrase = res.company.catchPhrase;
      this.userData.company.bs = res.company.bs;
    })
  }

  getPosts(id:number){

    this.route.navigateByUrl('posts/'+this.userData.username+'/'+this.userData.id)
    // this.postService.getPosts(id).subscribe((res:any) => {
    //   console.log(res);
    // })
  }
}
