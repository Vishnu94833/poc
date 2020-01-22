import { UsersModel } from './users.model';
import { AddressModel } from './address.model';
import { CompanyModel } from './company.model';

export class UserModel {
    id : number = 0;
    name : string = "";
    username : string = '';
    email : string = '';
    address : AddressModel = new AddressModel();
    phone : string = '';
    website : string = '';
    company : CompanyModel = new CompanyModel();
}