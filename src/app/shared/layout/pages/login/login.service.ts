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
    return this.httpClient.post<string>('/api/authenticate',credentials, {headers : new HttpHeaders({'collection': collection_name})});
  }

  isLogin(response: any): Observable<any>{
    let collection_name = this.collection.collectionArray["login"];
    debugger;
    return this.httpClient.post<any>('/api/authenticate/isLogin', response, {headers : new HttpHeaders({'collection': collection_name})});
  }

  logOut(userData: any): Observable<any>{
    let collection_name = this.collection.collectionArray["login"];
    return this.httpClient.post<any>('/api/authenticate/logout',userData, {headers : new HttpHeaders({'collection': collection_name})});
  }

  rendertest(userData: any): Observable<any>{
    return this.httpClient.post<any>('/api/render',userData);
  }
}
