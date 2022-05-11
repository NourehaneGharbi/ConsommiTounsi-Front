import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Rayons } from '../models/Rayon.model'
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RayonService {

  header = new HttpHeaders({     'Content-Type': 'application/json'   })
  
  readonly API_URL = 'http://localhost:8081/SpringMVC';
  private rayon! :Rayons;
  

  constructor(private router: Router,
              private http: HttpClient) { }
    
    private rayons: Rayons[] = [];
    public rayon$ = new Subject<Rayons[]>();
   
     
    public addRayon(rayon: any){
      return this.http.post<any>(`${this.API_URL}/addRayons`,rayon)
    }

    public getAllRayons(){
      return this.http.get<Rayons[]>(`${this.API_URL}/retrieveAllRayons`)
    }

    getOneRayon(idRayons: any) {
      return new Promise((resolve, reject) => {
        this.http.get('http://localhost:8081/SpringMVC/findRayonsById/' +idRayons).subscribe(
          (response) => {
            resolve(response);
          },
          (error) => {
            reject(error);
          }
        );
      });
    }

    deleteRayon(idRayons :any){
      return this.http.delete<any>(`${this.API_URL}/removeRayons/`+idRayons)
    }
    

    UpdateRayonById(rayon : any, idRayon: any){
      return this.http.put<any>(`${this.API_URL}/updateRayonsById/`+idRayon, rayon)
    }
  
}



 

 
 
