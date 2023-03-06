import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  private product: any[] = [
    {
      name: " Boho Bangle Bracelet",
      price: 150.00,
      category: "accessories",
      imgurl: "../../assets/product/accesiories/product-accessory1.jpg"
    },
    {
      name: "Anchore Bracelet",
      price: 150.0,
      category: "accessories",
      imgurl: "../../assets/product/accesiories/product-accessory2.jpg"
    },
    {
      name: " Black Over-the-shoulder Handbag",
      price: 150.0,
      category: "accessories",
      imgurl: "../../assets/product/accesiories/product-bag1.jpg"
    }

    ,
    {
      name: " Black Over-the-shoulder Handbag",
      price: 150.0,
      category: "accessories",
      imgurl: "../../assets/product/accesiories/product-bag1.jpg"
    },
    // mens products

    {
      name: "Black Hoodie",
      price: 150,
      category: "men",
      imgUrl: "../../assets/product/men/product-hoodie1.jpg"
    },
    {
      name: "Grey Hoodie",
      price: 150,
      category: "men",
      imgUrl: "../../assets/product/men/product-hoodie2.jpg"
    },
    {
      name: "Green Hoodie",
      price: 150,
      category: "men",
      imgUrl: "../../assets/product/men/product-hoodie3.jpg"
    },
    {
      name: "Dark Brown Jeans ",
      price: 150,
      category: "men",
      imgUrl: "../../assets/product/men/product-m-jeans1.jpg"
    },
    {
      name: "Dark Blue Denime ",
      price: 150,
      category: "men",
      imgUrl: "../../assets/product/men/product-m-jeans2.jpg"
    },
    {
      name: "sky Blue Denime ",
      price: 150,
      category: "men",
      imgUrl: "../../assets/product/men/product-w-jeans3.jpg"
    },
    {
      name: "sport shoes ",
      price: 150,
      category: "men",
      imgUrl: "../../assets/product/men/sports=shoe1.jpg"
    },
    

  ]
    ;
  constructor() { }
  getProducts() {
    return this.product;
  }
  
}
