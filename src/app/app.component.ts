import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductComponent } from '../components/product/product.component';
import { UserComponent } from '../components/user/user.component';
import { CartComponent } from '../components/cart/cart.component';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductComponent, UserComponent, CartComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit{

  constructor(private cartService:CartService){}

  title = 'cartapp';
  cartInfo = this.cartService.getUserCart();

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }
}
