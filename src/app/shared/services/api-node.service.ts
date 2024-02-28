import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiNodeService {

  constructor(
    private http: HttpClient
  ) { 
    
  }

  getRes(data:any){
    return this.http.post(`${environment.urlAPi}/operaciones/suma-numeros`,data);
  }
}
