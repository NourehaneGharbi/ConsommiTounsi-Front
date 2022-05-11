import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from '../models/Stock.model';

@Injectable({
  providedIn: 'root'
})
export class StockService {

url="http://localhost:8081/SpringMVC"

constructor(private stockhttp : HttpClient) { }

getAllStocks(){
  return this.stockhttp.get<Stock[]>(`${this.url}/retrieveAllStocks`)
}


getStockById():Observable<Stock[]>{
  return this.stockhttp.get<Stock[]>(this.url+"/findStockById/");
}

addstock(stock : Stock):Observable<Stock>{
  return this.stockhttp.post<Stock>(this.url+"/addStock", stock )
}


deleteStockById(idStock: any){
  return this.stockhttp.delete<any>(`${this.url}/removeStock/`+idStock );
}

updateStock(stock:Stock): Observable<Stock>{
  return this.stockhttp.put<Stock>(this.url+"updateStock", stock);
}


}