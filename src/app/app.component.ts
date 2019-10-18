import { Component } from '@angular/core';
import {Product} from './product.model'
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shoping-cart-test';
  
  producs: Product [] = [
    {
      id: 1,
      name: "Macbook Air 2018",
      img: "https://laptoptcc.com/wp-content/uploads/2018/06/Laptop-TCC-Dell-XPS-9350-40.jpg",
      desc: "Hàng tồn kho",
      price: 2,
      quantity: 11
    },
    {
      id: 2,
      name: "Macbook Air 2019",
      img: "https://laptoptcc.com/wp-content/uploads/2018/06/Laptop-TCC-Dell-XPS-9350-40.jpg",
      desc: "Hàng hết hạn sử dụng phế thải",
      price: 2220080,
      quantity: 12
    },
  ]


  removeProduct = (id) => {
    const indexOfProduct = this.producs.findIndex(item  => item.id == id)
    this.producs.splice(indexOfProduct, 1)
  }
}
