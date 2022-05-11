import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Promotion } from 'app/models/Promotion.model';
import { PromotionService } from 'app/services/promotion.service';

@Component({
  selector: 'app-add-promotion',
  templateUrl: './add-promotion.component.html',
  styleUrls: ['./add-promotion.component.scss']
})
export class AddPromotionComponent implements OnInit {

  public listPromotions!:Promotion[];
  promotionForm!: FormGroup;
  aujourdhui = new Date(Date.now());

  constructor(private promotionService: PromotionService,
              private router: Router,
              private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public editData: any,
              private dialogRef: MatDialogRef<AddPromotionComponent>) { }

  ngOnInit(): void {
    this.promotionForm = this.formBuilder.group({
       valeurPromotion : ['', Validators.required],
       datePromotionDebut : ['', Validators.required],
       datePromotionFin : ['', Validators.required]
    });
    if(this.editData){
      this.promotionForm.controls['valeurPromotion'].setValue(this.editData.valeurPromotion);
      this.promotionForm.controls['datePromotionDebut'].setValue(this.editData.datePromotionDebut);
      this.promotionForm.controls['datePromotionFin'].setValue(this.editData.datePromotionFin);
    }
  }

  getAllPromotions(){
    this.promotionService.getAllPromotions().subscribe(res=>{console.log(res);
      this.listPromotions=res}
    );
  }

  save(){
    if(this.editData){
     if(this.promotionForm.valid){
 //     if((this.editData.datePromotionDebut < this.editData.datePromotionFin)||(this.editData.datePromotionDebut< this.aujourdhui)){
   //     alert("Saisire une date correcte")
     //  }else{
       this.promotionService.addPromotion(this.promotionForm.value, this.editData.idPromotion).subscribe({
         next:(res)=>{
           alert("Promotion ajouté avec succès !")
           this.promotionForm.reset();
           this.dialogRef.close('Ajouter');
           this.router.navigate(['/promotions']);
           //this.getAllPromotions();
         },
         error:()=>{
           alert("Erreur lors de l'ajout du promotion !")
         }
       }
      
       );
    // }
    }
    }
   }
   
}
