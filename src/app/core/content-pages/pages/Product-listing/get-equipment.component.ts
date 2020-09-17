import { Component, OnInit, TemplateRef } from '@angular/core';
import { CheckboxFilter } from 'src/app/core/vertical-filter-bar/checkbox-filter/checkbox-filter.model';
import { FBFilter } from 'src/app/core/vertical-filter-bar/fb-filter.interface';
import { KeywordFilter } from 'src/app/core/vertical-filter-bar/keyword-filter/keyword-filter.model';
import { RangeFilter } from 'src/app/core/vertical-filter-bar/range-filter/range-filter.model';

@Component({
  selector: 'app-get-equipment',
  templateUrl: './get-equipment.component.html',
  styleUrls: ['./get-equipment.component.scss']
})
export class GetEquipmentComponent implements OnInit {
  itemsList:any=[
    {
      img: "assets/images/medical-product/autoclave.png",
      name:"Life Steriware Dental",
      price:"200.00",
      disPrice:"100.00",
      walletPrice:"80.00"
    },
    {
      img: "assets/images/medical-product/autoclave.png",
      name:"Life Steriware Dental",
      price:"200.00",
      disPrice:"100.00",
      walletPrice:"80.00"
    },
    {
      img: "assets/images/medical-product/autoclave.png",
      name:"Life Steriware Dental",
      price:"200.00",
      disPrice:"100.00",
      walletPrice:"80.00"
    },
    {
      img: "assets/images/medical-product/autoclave.png",
      name:"Life Steriware Dental",
      price:"200.00",
      disPrice:"100.00",
      walletPrice:"80.00"
    },
    {
      img: "assets/images/medical-product/autoclave.png",
      name:"Life Steriware Dental",
      price:"200.00",
      disPrice:"100.00",
      walletPrice:"80.00"
    },
    {
      img: "assets/images/medical-product/autoclave.png",
      name:"Life Steriware Dental",
      price:"200.00",
      disPrice:"100.00",
      walletPrice:"80.00"
    },
    {
      img: "assets/images/medical-product/autoclave.png",
      name:"Life Steriware Dental",
      price:"200.00",
      disPrice:"100.00",
      walletPrice:"80.00"
    },
    {
      img: "assets/images/medical-product/autoclave.png",
      name:"Life Steriware Dental",
      price:"200.00",
      disPrice:"100.00",
      walletPrice:"80.00"
    },
    {
      img: "assets/images/medical-product/autoclave.png",
      name:"Life Steriware Dental",
      price:"200.00",
      disPrice:"100.00",
      walletPrice:"80.00"
    },
    {
      img: "assets/images/medical-product/autoclave.png",
      name:"Life Steriware Dental",
      price:"200.00",
      disPrice:"100.00",
      walletPrice:"80.00"
    }
  ];
  categories: string[] = ['Medical Disposables', 'Consumables', 'Medical Disposables', 'Consumables']
  customerRatings: string[] = ['4 & above', '3 & above', '2 & above',]
  discountRange: string[] = ['10% or more', '20% or more', '30% or more']
  byCountry: string[] = ['India', 'Nepal']
  verticalBarFilters: FBFilter[] = [
    // new KeywordFilter('description', 'Description'),
    new CheckboxFilter('CATEGORIES', 'CATEGORIES', this.categories, 6),
    new RangeFilter('price', 'Price', 0, 10000, true),
    new CheckboxFilter('customerRatings', 'Customer Ratings', this.customerRatings),
    new CheckboxFilter('discountRange', 'Discount Range', this.discountRange),
    new CheckboxFilter('byCountry', 'Filter By Country', this.byCountry)
  ];
  constructor() {
  }
  
  ngOnInit(): void {
    console.log(this.verticalBarFilters)
  }
  onPageChange(e){
    console.log(e.page)
  }
}
