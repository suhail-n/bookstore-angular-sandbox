import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { ShoppingListService } from './shopping-list.service';
import { Book } from '../books/book.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  
  faShoppingCart = faShoppingCart;
  books: Book[];
  totalPrice: number = 0;
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.updateBooks();
  }
  
  updateBooks(): void{
    this.books = this.slService.getBooks();
    this.setTotalPrice();
  }
  setTotalPrice(){
    this.totalPrice = this.books.reduce((prev, cur) => prev + cur.price, 0); 
  }
  
  deleteBook(id: number){
    this.slService.deleteBook(id);
    this.updateBooks();
  }
}
