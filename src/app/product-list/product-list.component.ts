import { Component, Input, Output} from "@angular/core";

import { products } from "../products";
import { ActivatedRoute } from '@angular/router';

import { CartService } from '../cart.service';
import { productsFirstCategory } from '../productsFirstCategory';
import { productsSecondCategory } from '../productsSecondCategory';
import { productsThirdCategory } from '../productsThirdCategory';
import { productsFourthCategory } from '../productsFourthCategory';


@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent {
  products = products;
  @Input() task: Task;
  cnt:number = 0;
  // @Output() remove = new EventEmitter();
  product;  
  productsFirstCategory = productsFirstCategory;
  productsSecondCategory = productsSecondCategory;
  productsThirdCategory = productsThirdCategory;
  productsFourthCategory = productsFourthCategory;

  onNotify() {
    window.alert("You will be notified when the product goes on sale");
  }

  sharetotelegram(product){
        window.open(`https://t.me/share/url?url=http://localhost:4200/products/${product.link}`)
    }

  sharetowhatsapp(product) {
        window.open(`whatsapp://send?text=http://localhost:4200/products/${product.link}`)
    }

  removeProduct(index: number) {
    this.productsFirstCategory = this.productsFirstCategory.filter((x) => x.id !== index); 
  }

  increaseLikes(product) {
    //  window.alert(
    //   '\n                            You have liked this product:\n\n' + product.name)
    product.numberOflikes++;
  }

}

