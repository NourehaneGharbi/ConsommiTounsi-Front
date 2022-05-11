import { Component, OnInit } from '@angular/core';
import { StockService } from '../../services/stock.service';
import { Stock } from '../../models/Stock.model';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  liststock: any;
  constructor(private stockservice : StockService) { }

  ngOnInit(): void {
    this.getAllStocks()
  }

  getAllStocks(){
    this.stockservice.getAllStocks().subscribe(res => this.liststock=res);
  }

  deleteStock(idStock : any){
    this.stockservice.deleteStockById(idStock).subscribe(()=> this.getAllStocks());
  }
}
