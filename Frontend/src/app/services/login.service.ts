import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User';

const endpoint = 'http://localhost:3000/';

@Injectable()
export class LoginService {
 
    httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    constructor(private http: HttpClient){
 
    }
     
    validateLogin(user: User){
        return this.http.post(endpoint + 'api/login',{
            username : user.username,
            password : user.password
        })
    }

    getUser() {
      return localStorage.getItem('idUser');
    }
 
}