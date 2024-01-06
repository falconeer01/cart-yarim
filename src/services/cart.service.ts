import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Cart } from '../models/cart';
import { Product } from '../models/product';
import Swal from 'sweetalert2';
// import { CartItemDto } from '../models/cart-item-dto';
// import { ProductImage } from '../models/product-image';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private selectedUser!:User
  private cartList:Cart[]=[];
  // private cartItemList:CartItemDto[]=[];
  // private productList:Product[]=[];

  constructor(){}

  getSelectedUser():User|undefined{
    return this.selectedUser;
  }

  setSelectedUser(user:User){
    this.selectedUser=user;
    if(this.getUserCart()==undefined){
      this.cartList.push({userId:user.id,id:this.cartList.length+1,items:[]})
    }

    Swal.fire({
      position: "top-end",
      title: 'Selected User',
      text: user.fullName+' is selected for shop',
      showConfirmButton:false,
      timer:1500
    })
  }

  getUserCart():Cart|undefined{
    return this.cartList.find(cart=>cart.userId==this.selectedUser.id);
  }

  // makeCartItem(product:Product):CartItemDto|undefined{
  //   let cart=this.getUserCart();
  //   let count=cart?.items.find(item=>item.productId==product.id);
  //   let cartItem:CartItemDto|undefined;
  //   let images:ProductImage[]=[];
  //   let img=images.find(image=>image.id==product.id)

  //   this.productList.map(product=>{
  //     if(count!=undefined && img!=undefined){
  //       cartItem = {
  //         id:product.id,
  //         img:img,
  //         name:product.name,
  //         price:product.price,
  //         count:count?.count
  //       }
  //     }
  //   })

  //   if(cartItem!=undefined){
  //     this.cartItemList.push(cartItem);
  //   }

  //   console.log(this.cartItemList);
  //   console.log(cartItem);

  //   return cartItem;
  // }

  addProductInCart(product:Product){
    let user=this.getSelectedUser();

    let cart=this.getUserCart();

    if(cart==undefined){
      Swal.fire({
        position: "top-end",
        title: 'Uups',
        text: 'Please select user.',
        icon:'error',
        showConfirmButton:false,
        timer:1500
      })
      return;
    }

    let cartItem=cart.items.find(item=>item.productId==product.id);

    if(cartItem==undefined){
      cartItem={
        cartId:cart.id,
        productId:product.id,
        count:0
      };
      cart.items.push(cartItem)
    }

    cartItem.count++;

    localStorage.setItem(`${user?.fullName}'s cart'`, JSON.stringify(cart));

    Swal.fire({
      position: "top-end",
      title: 'Added product',
      text: product.name+' added in cart',
      showConfirmButton:false,
      timer:1500
    })
  }

  removeProductFromCart(product:Product){
    let user=this.getSelectedUser();
    let cart=this.getUserCart();
    let cartItem=cart?.items.find(cartItem=>cartItem.productId==product.id);
    let cartItemIndex=cart?.items.findIndex(cartItem=>cartItem.productId==product.id);

    if(cartItem==undefined){
      Swal.fire({
        position: "top-end",
        title: 'Uups',
        text: 'Please select user.',
        icon:'error',
        showConfirmButton:false,
        timer:1500
      })
      return;
    }

    if(cartItem!=undefined && cartItem.count > 0){
      cartItem.count--;
      localStorage.setItem(`${user?.fullName}'s cart'`, JSON.stringify(cart));
    }

    if(cartItem.count==0 && cartItemIndex!=undefined){
      cart?.items.splice(cartItemIndex, 1);
      localStorage.setItem(`${user?.fullName}'s cart'`, JSON.stringify(cart));
    }

    Swal.fire({
      position: "top-end",
      title: 'Removed product',
      text: product.name+' removed from cart',
      showConfirmButton:false,
      timer:1500
    })
  }
}
