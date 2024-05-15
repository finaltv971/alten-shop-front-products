export interface Product {
    id: number;
    code: string;
    name: string;
    description: string;
    image: string;
    price: number;
    category: string;
    quantity: number;
    inventoryStatus: 'INSTOCK'|'LOWSTOCK' |'OUTOFSTOCK' ;
    rating: number;
  }