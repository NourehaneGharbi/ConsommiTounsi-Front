import { Component, OnInit } from '@angular/core';
import { RayonService } from '../../services/rayon.service';
import { Rayons } from '../../models/Rayon.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UpdateRayonComponent } from '../update-rayon/update-rayon.component';
import { AddRayonComponent } from '../add-rayon/add-rayon.component';

@Component({
  selector: 'app-rayons',
  templateUrl: './rayons.component.html',
  styleUrls: ['./rayons.component.scss']
})
export class RayonsComponent implements OnInit {

  public listRayons!:Rayons[];
  myRayon: any;

  constructor(private rayonService: RayonService, 
              private router: Router,
              private dialog: MatDialog) {
 
 }
    
   ngOnInit() {
    this.getAllRayons();
   }

   deleteRayon(idRayon : any){
    this.rayonService.deleteRayon(idRayon).subscribe(()=> this.getAllRayons());
  }
 
  getAllRayons(){
    this.rayonService.getAllRayons().subscribe(res=>{console.log(res);
      this.listRayons=res}
    );
  }

  
  editRayon(rayon:any){
    this.dialog.open(AddRayonComponent,{
      width: '50%',
      data:rayon
    })
  }

  addRayon(){
    this.router.navigate(['/addRayon']);
  }

  openDialog(){
    this.dialog.open(AddRayonComponent, {
      width: '50%'
    })
  }

}
