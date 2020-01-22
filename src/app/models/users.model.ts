import { UserModel } from './user.model';
import { PostsModel } from './posts.model';

export class UsersModel {
    userData : Array<UserModel> = new Array<UserModel>();
    postsData : Array<PostsModel> = new Array<PostsModel>();
}