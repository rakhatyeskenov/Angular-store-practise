import { Component, Input, Output} from "@angular/core";

import { products } from "../products";

@Component({
  selector: "app-product-item",
  templateUrl: "./product-item.component.html",
  styleUrls: ["./product-item.component.css"]
})
export class ProductItemComponent {
  products = products;
  @Input() task: Task;
  cnt:number = 0;
  // @Output() remove = new EventEmitter();

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
    this.products = this.products.filter((x) => x.id !== index); 
  }

  increaseLikes(product) {
    //  window.alert(
    //   '\n                            You have liked this product:\n\n' + product.name)
    product.numberOflikes++;
  }

}

