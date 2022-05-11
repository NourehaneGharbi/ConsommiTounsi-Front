import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Promotion } from 'app/models/Promotion.model';

@Injectable({
  providedIn: 'root'
})
export class PromotionService{

  header = new HttpHeaders({     'Content-Type': 'application/json'   })
  
  readonly API_URL = 'http://localhost:8081/SpringMVC';

  constructor(private router: Router,
              private http: HttpClient) { }
    
    private promotions: Promotion[] = [];
    
    public addPromotion(promotion: any, idPromotion: any){
      return this.http.put<any>(`${this.API_URL}/updatePromotionById/`+idPromotion, promotion)
    }


    public getAllPromotions(){
      return this.http.get<Promotion[]>(`${this.API_URL}/retrieveAllPromotions`)
    }

    getOnePromotion(idPromotion: any) {
      return new Promise((resolve, reject) => {
        this.http.get('http://localhost:8081/SpringMVC/findPromotionById/' +idPromotion).subscribe(
          (response) => {
            resolve(response);
          },
          (error) => {
            reject(error);
          }
        );
      });
    }

    deletePromotion(idPromotion :any){
      return this.http.delete<any>(`${this.API_URL}/removePromotion/`+idPromotion)
    }
    
    editPromotion(promotion : any){
      return this.http.put<any>(`${this.API_URL}/updatePromotion`,promotion)
    }
  
}



 

 
 
