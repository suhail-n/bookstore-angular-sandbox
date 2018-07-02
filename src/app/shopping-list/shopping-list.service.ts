import { Injectable } from '@angular/core';
import { Book } from '../books/book.model';
import { BooksComponent } from '../books/books.component';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private books: Book[];

  constructor() { 
    this.books = [];
  }

  addBookToCart(book: Book): void {
    this.books.push(book);
  }

  getBooks(){
    return this.books.slice();
  }

  deleteBook(id: number): void {
    this.books = this.books.filter(book => book.id !== id);
  }

}
