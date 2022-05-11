import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Promotion } from 'app/models/Promotion.model';
import { PromotionService } from 'app/services/promotion.service';
import { AddPromotionComponent } from '../add-promotion/add-promotion.component';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss']
})
export class PromotionComponent implements OnInit {

  public listPromotions!:Promotion[];

  constructor(private promotionService: PromotionService, 
              private router: Router,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllPromotions();
  }

  addPromotion(promotion: any){
    this.dialog.open(AddPromotionComponent,{
      width: '50%',
      data:promotion
    })
  }

  deletePromotion(idPromotion : any){
    this.promotionService.deletePromotion(idPromotion).subscribe(()=> this.getAllPromotions());
  }
 
  getAllPromotions(){
    this.promotionService.getAllPromotions().subscribe(res=>{console.log(res);
      this.listPromotions=res}
    );
  }

 

}
