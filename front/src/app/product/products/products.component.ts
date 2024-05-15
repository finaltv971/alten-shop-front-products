import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { HttpClient } from '@angular/common/http';
import { ServiceProduit } from '../services';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})


export class ProductsComponent implements OnInit {

  layout: 'grid' | 'list' = 'grid';

  mesProduitsTelecharges: Product[] = [];

  public sortOptions:any [];

  sortKey: string;

  champTri: string;

  ordreTri: number;

  constructor(private serviceProduit:ServiceProduit) { }

  ngOnInit(): void {
    this.mesProduits()

    this.sortOptions = [
      {label: 'Recent', value: '!year'},
      {label: 'Ancien', value: 'year'},
      {label: 'Marque', value: 'brand'}
    ];
  }
  triProduits(event:any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.ordreTri = -1;
        this.champTri = value.substring(1, value.length);
    }
    else {
        this.ordreTri = 1;
        this.champTri = value;
    }
}
mesProduits() {
  this.serviceProduit.getProduits().subscribe(products => {
    console.log(products)
    this.mesProduitsTelecharges = products["data"];
  }, error => {
    console.error('Erreur récup des produits', error);
  });
}
  parser(item:any){
    const obj = JSON.stringify(item) || 'none';

    return obj
  }


}
