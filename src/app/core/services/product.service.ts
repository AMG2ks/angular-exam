import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = "http://localhost:3000/products"
  constructor(private _http: HttpClient) { }

  getAllProducts() {
    return this._http.get(this.apiUrl);
  }
  getProductById(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this._http.get<any>(url);
  }

  addProduct(product: any): Observable<any> {
    return this._http.post<any>(this.apiUrl, product);
  }

  updateProduct(id: string, updates: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this._http.put<any>(url, updates);
  }

  deleteProduct(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this._http.delete<any>(url);
  }
}
