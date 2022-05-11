import { Produit } from "./Produit.model";
import { Rayons } from "./Rayon.model";

export class Stock {
   public idStock: any
   public quantite: any
   public quantiteMin: any
   public libelleStock: any
   public dateCreationStock: any
   public dateExpiration: any
   public nbrCmd: any
   public produit!: Produit
   public rayons!: Rayons
}