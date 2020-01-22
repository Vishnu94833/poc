import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostsModel } from '../models/posts.model';



const uri = environment.baseUrl;


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _http: HttpClient) { }

  getPosts(id: number): Observable<any> {
    return this._http.get<any>(uri + 'posts?userId=' + id)
  }

  getPostsById(res):Array<PostsModel>{
    let list = new Array<PostsModel>();
    res.forEach((item:any )=>{
      let obj = new PostsModel();
      obj.userId = item.userId;
      obj.title = item.title;
      obj.body = item.body;
      list.push(obj)
    })
    return list;
    return ;

  }

}
