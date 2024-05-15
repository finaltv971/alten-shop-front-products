import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ServiceProduit } from '../services';
@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.scss']
})
export class ProductsAdminComponent implements OnInit {

  public mesProduitsTelecharges: Product[] = [];
  public modifiable: boolean = false;
  public modalVisible : boolean = false;
  public inventoryStatusValeurs = ['INSTOCK', 'LOWSTOCK', 'OUTOFSTOCK'];

  constructor(private serviceProduit:ServiceProduit) { }

  product: Product = {
    id: this.mesProduitsTelecharges.length+1,
    code: '',
    name: '',
    description: '',
    image: '',
    price: 0,
    category: '',
    quantity: 0,
    inventoryStatus: 'INSTOCK',
    rating: 0
  };


  ngOnInit(): void {
    this.mesProduits()
  }

  mesProduits() {
    this.serviceProduit.getProduits().subscribe(products => {
      console.log(products)
      this.mesProduitsTelecharges = products["data"];
      this.product.id = products.length + 1;
    }, error => {
      console.error('Erreur récup des produits', error);
    });
  }
  ajouter(product:Product =undefined){

    this.mesProduitsTelecharges.push(product)

    // ou

    this.serviceProduit.creerProduitFromServer(product);


    let produitVide : Product ={
      id: this.mesProduitsTelecharges.length+1,
      code: '',
      name: '',
      description: '',
      image: '',
      price: 0,
      category: '',
      quantity: 0,
      inventoryStatus: 'INSTOCK',
      rating: 0
    };
    this.product = produitVide;
  }
  afficherModal() {
    console.log(this.modalVisible)
    this.modalVisible = true;
  }

  modifier (product:Product){
    this.modifiable=true
 }
  enregistrer (product:Product,i:number){
    this.serviceProduit.mettreAJourProduitFromServer(product);

    this.modifiable=false
 }
 vider(){
  this.mesProduitsTelecharges = []
  // ou
  this.serviceProduit.toutSupprimerProduitFromServer();

 }
 supprimer (product:Product,i:number){
    console.log(product,i)
    this.mesProduitsTelecharges = this.mesProduitsTelecharges.filter((item, index) => index !== i);

    // ou
    this.serviceProduit.supprimerProduitFromServer(product);


 }
}
