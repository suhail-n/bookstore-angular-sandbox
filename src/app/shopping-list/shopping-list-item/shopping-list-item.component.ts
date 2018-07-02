import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../books/book.model';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent implements OnInit {
  
  @Input() book: Book;
  @Output() deleteBook = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  addToTrash(){
    this.deleteBook.emit(this.book.id);
  }


}
