import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Rayons } from '../models/Rayon.model'
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HighchartsService {

  //header = new HttpHeaders({     'Content-Type': 'application/json'   })
  

  constructor(private router: Router,
              private http: HttpClient) { }
   

    
    getBestProduit() {
      return new Promise((resolve, reject) => {
        this.http.get('http://localhost:8081/SpringMVC/bestProduit').subscribe(
          (response) => {
            resolve(response);
          },
          (error) => {
            reject(error);
          }
        );
      });
    }

  
}



 

 
 
