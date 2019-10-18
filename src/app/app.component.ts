import { Component, OnInit } from '@angular/core';
import {Product} from './product.model'
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'shoping-cart-test';
  promoCode = ''
  counter: Number = 0
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
      price: 2222220080,
      quantity: 12
    },
  ]

 ngOnInit () {
   this.counter = this.producs.length
 }
  removeProduct = (item) => {
    const indexOfProduct = this.producs.findIndex(item  => item.id == item.id) 
    this.producs.splice(indexOfProduct, 1)
    alert("Đã xóa"+ item.name)
    this.counter = this.producs.length
  }

  checkPromo = () => {
    console.log("OK")
    if (this.promoCode = 'durex') {
      alert("Còn lâu mới giảm giá")
    }
  }
}
