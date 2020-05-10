import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DefaultsService {

  constructor(private http:HttpClient) { }

  getCountries(){
    return this.http.get("assets/countries.json");
  }



}
