import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  readonly APIUrl = "http://127.0.0.1:8000/Api";
  // base_url:string = "https://swaggerflashcard-7.herokuapp.com/";
  url ="https://swaggerflashcard-7.herokuapp.com/"
  token =""
  constructor(private http:HttpClient) { }

  getSubjectList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl +'/subject');
  }
  addSubject(val:any){
    return this.http.post(this.APIUrl + '/subject/',val);
  }

  updateSubject(val:any){
    return this.http.put(this.APIUrl + '/subject/',val);
  }

  deleteSubject(val:any){
    return this.http.delete(this.APIUrl + '/subject/'+val);
  }
  getAllSubjectNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/department/');
  }
  // create new user
  createUser(username: string, email: string, password: string) {
    return this.http.post(
      this.url + 'users/create/',
      {
        username: username,
        password: password,
        email: email,
      },
      {
        headers: {
          Authorization: 'Token ' + this.token,
        },
      }
    );
  }


  // login user
  loginUser(username: string, password: string) {
    return this.http.post(
      this.url + 'auth/login/',
      {
        username: username,
        password: password,
      },
      {
        headers: {
          Authorization: 'Token ' + this.token,
        },
      }
    );
  }
}

