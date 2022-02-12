import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http:HttpClient) { }
  private baseUrl = 'http://localhost:10100';

  getProducts(){
    return this.http.get(`${this.baseUrl}`+'/products');
  }

}
