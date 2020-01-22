import { Injectable } from '@angular/core';
import  {environment}  from "../../environments/environment";
import { HttpClient } from '@angular/common/http';
import { UsersModel } from '../models/users.model';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';

const uri = environment.baseUrl;
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private _http:HttpClient) { }


  getUsers():Observable<UsersModel>{
    return this._http.get<UsersModel>(uri+"users")
  }

  bindUsers(response):Array<UserModel>{
    let list = new Array<UserModel>();
    response.forEach((item:any )=>{
      let obj = new UserModel();
      obj.id = item.id;
      obj.name = item.name;
      obj.username = item.username;
      obj.email = item.email;
      obj.address.city =  item.address.city
      obj.address.suite = item.address.suite;
      obj.address.street = item.address.street;
      obj.address.zipcode = item.address.zipcode;
      obj.phone = item.phone;
      obj.website = item.website;
      obj.company.name = item.company.name;
      obj.company.catchPhrase = item.company.catchPhrase;
      obj.company.bs = item.company.bs
      list.push(obj)
    })
    return list;
  }


  getUserById(id:number):Observable<UsersModel>{
    return this._http.get<UsersModel>(uri+"users/"+id)
  }

}
