import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Collection } from 'src/app/common/collection';
import { Environment} from './../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  constructor(
    private httpClient : HttpClient, private collection: Collection
  ) { }

  getProductCategory(uid: string): Observable<any>{
    return this.httpClient.get<any>(Environment.api+`api/getProductCategory/${uid}`)
  }

  getProductList(): Observable<any>{
    return this.httpClient.get<any>(Environment.api+`productCategory/getProductCategoryList`)
  }

  createProductCategory(apiBody: any): Observable<any>{
    debugger;
    return this.httpClient.post<any>(Environment.api+`productCategory/createProductCategory`, apiBody)
  }

  updateProductCategory(apiBody: any): Observable<any>{
    return this.httpClient.put<any>(Environment.api+`api/updateProductCategory`,apiBody)
  }
}
