import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RayonService } from 'app/services/rayon.service';
import { Rayons } from '../../models/Rayon.model';

@Component({
  selector: 'app-add-rayon',
  templateUrl: './add-rayon.component.html',
  styleUrls: ['./add-rayon.component.scss']
})
export class AddRayonComponent implements OnInit {

  public listRayons!:Rayons[];
  rayonForm!: FormGroup;
  actionBtn: String = "Ajouter";

  constructor(private rayonService: RayonService,
              private router: Router,
              private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public editData: any,
              private dialogRef: MatDialogRef<AddRayonComponent>) { }

  ngOnInit(): void {
    this.rayonForm = this.formBuilder.group({
      typeRayons : ['', Validators.required],
      categorieProduit : ['', Validators.required]
    });
    if(this.editData){
      this.actionBtn = "Modifier";
      this.rayonForm.controls['typeRayons'].setValue(this.editData.typeRayons);
      this.rayonForm.controls['categorieProduit'].setValue(this.editData.categorieProduit);
    }
  }

  getAllRayons(){
    this.rayonService.getAllRayons().subscribe(res=>{console.log(res);
      this.listRayons=res}
    );
  }

  
  save(){
   if(!this.editData){
    if(this.rayonForm.valid){
      this.rayonService.addRayon(this.rayonForm.value).subscribe({
        next:(res)=>{
          alert("Rayon ajouté avec succès !")
          this.rayonForm.reset();
          this.dialogRef.close('Ajouter');
          this.getAllRayons();
        },
        error:()=>{
          alert("Erreur lors de l'ajout du produit !")
        }
      }
        
      );
    }
   }else{
     this.updateRayon();
   }
  }

  updateRayon(){
    this.rayonService.UpdateRayonById(this.rayonForm.value, this.editData.idRayons).subscribe({
      next:(res)=>{
        alert("Rayon modifiée avec succès !")
        this.rayonForm.reset();
        this.dialogRef.close('Modifier');
        this.getAllRayons();
        },
        error:()=>{
          alert("Erreur lors de modification du produit !")
        }
      });
  }
}
