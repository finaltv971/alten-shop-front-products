import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceProduit {

  constructor(private httpClient: HttpClient) { }

  getProduits(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('./assets/products.json');
  }
  getProduitsFromServer(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('http://localhost/produits');
  }
  getProduitFromServer(produit :Product): Observable<Product[]> {
    return this.httpClient.get<Product[]>('http://localhost/produits/'+produit.id);
  }
  creerProduitFromServer(produit :Product): Observable<Product> {
    return this.httpClient.put<Product>('http://localhost/produit', produit);
  }
  mettreAJourProduitFromServer(produit :Product): Observable<Product> {
    return this.httpClient.patch<Product>('http://localhost/produits/'+produit.id, produit);
  }
  supprimerProduitFromServer(produit :Product): Observable<Product> {
    return this.httpClient.delete<Product>('http://localhost/produits/'+produit.id);
  }
  toutSupprimerProduitFromServer(): Observable<Product> {
    return this.httpClient.delete<Product>('http://localhost/produits/\*');
  }

  //normalement je devrais utiliser l'object
}
