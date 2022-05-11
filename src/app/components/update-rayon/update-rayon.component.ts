import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Rayons } from 'app/models/Rayon.model';
import { RayonService } from 'app/services/rayon.service';
import { RayonsComponent } from '../rayons/rayons.component';

@Component({
  selector: 'app-update-rayon',
  templateUrl: './update-rayon.component.html',
  styleUrls: ['./update-rayon.component.scss']
})
export class UpdateRayonComponent implements OnInit {

  rayon: Rayons={
    idRayons: 0,
    typeRayons:'',
    categorieProduit: 0
  
   
   }

   rayonForm: FormGroup;

  constructor(private rayonService: RayonService,
              private formBuilder: FormBuilder) { 
    let rayonFormControls = {
      typeRayons : new FormControl('', [Validators.required]),
      categorieProduit: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
     
      }
      this.rayonForm = formBuilder.group(rayonFormControls) 
  }

  
  ngOnInit(): void {
    
  }

  

}
