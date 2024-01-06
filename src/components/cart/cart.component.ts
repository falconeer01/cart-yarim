import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { CartItemDto } from '../../models/cart-item-dto';
import { ProductService } from '../../services/product.service';
import { Cart } from '../../models/cart';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{
  constructor(public cartService:CartService){}

  userCarts:Cart[]=[];

  // cartItems: CartItemDto[] = [];

  // makeCartItem(product:Product){
  //   this.cartService.makeCartItem(product);
  // }

  getAll(){
    // this.userCart = this.cartService.getUserCart();
  }

  ngOnInit(): void {
    this.getAll();
  }
}
