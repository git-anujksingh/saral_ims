import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Collection } from 'src/app/common/collection';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpClient : HttpClient, private collection: Collection
  ) { }

  getLogin(credentials: any): Observable<any>{
    let collection_name = this.collection.collectionArray["login"];
    debugger;
    return this.httpClient.post<any>('https://saral-instance.onrender.com/api/authenticate',credentials)
  }

  isLogin(response: any): Observable<any>{
    let collection_name = this.collection.collectionArray["login"];
    return this.httpClient.post<any>('https://saral-instance.onrender.com/api/isLogin', response)
  }

  logOut(userData: any): Observable<any>{
    let collection_name = this.collection.collectionArray["login"];
    return this.httpClient.post<any>('https://saral-instance.onrender.com/api/logout',userData)
  }

  rendertest(userData: any): Observable<any>{
    return this.httpClient.post('https://saral-instance.onrender.com/api/render',userData);
  }
}
