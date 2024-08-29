import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CartModel } from './topbar.model';

@Injectable({
  providedIn: 'root'
})
export class TopbarService {

  private urlApi = 'http://localhost:8000/';

  constructor(private http: HttpClient) { }

  public getCartData(): Observable<CartModel[]> {
    return this.http.get<any>(`${this.urlApi}carritoCompras/`)
}
}
