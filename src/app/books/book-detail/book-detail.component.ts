import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Book } from '../book.model';
import { Location } from '@angular/common';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  id: number;
  book: Book;
  quantity: number = 0;
  isCollapsed: boolean = true;

  constructor(
    private booksService: BooksService, 
    private route: ActivatedRoute, 
    private location: Location, 
    private slService: ShoppingListService) { 
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.book = this.booksService.getBookById(this.id);
      }
    )
    
  }
  goBack(){
    this.location.back();
  }

  onAddToCart(){
    this.slService.addBookToCart(this.book);
    let books = this.slService.getBooks();
  }

}
