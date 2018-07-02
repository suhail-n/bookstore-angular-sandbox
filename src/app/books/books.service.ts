import { Injectable } from '@angular/core';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  
  private books: Book[];

  constructor() {
    this.books = [
      new Book(
        1,
        "C# in Depth",
        "Jon Skeet",
        50.39,
        616,
        "https://images-na.ssl-images-amazon.com/images/I/41prHleW6NL._SX397_BO1,204,203,200_.jpg"
      ),
      new Book(
        2,
        "Head First Java",
        "Kathy Sierra, Bert Bates",
        68.39,
        688,
        "https://images-na.ssl-images-amazon.com/images/I/51JDrqnm3uL._SX423_BO1,204,203,200_.jpg"
      ),
      new Book(
        3,
        "Learning Python: Powerful Object-Oriented Programming",
        "Mark Lutz",
        51.66,
        1648,
        "https://images-na.ssl-images-amazon.com/images/I/515iBchIIzL._SX379_BO1,204,203,200_.jpg"
      )
    ]
   }

  getBooks(): Book[]{
    return this.books.slice();
  }

  getBookById(id: number): Book{
    return this.getBooks().filter(book => book.id === id)[0]
  }
}
