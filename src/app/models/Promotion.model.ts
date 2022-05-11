import { Stock } from "./Stock.model"

export class Promotion {  
    public idPromotion: any
    public datePromotionDebut!: Date
    public datePromotionFin!: Date
    public typePromotion: any
    public valeurPromotion: any
    public newProductPrice: any  
    public stock!: Stock  
  }