import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../book.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ShoppingListService } from '../../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  @Input() book: Book;
  isCollapsed: boolean = true;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private slService: ShoppingListService ) { }

  ngOnInit() {
  }

  onClickHandler(): void {
    this.router.navigate([`${this.book.id}`], {relativeTo: this.route});
  }
  onAddToCart(){
    this.slService.addBookToCart(this.book);
    let books = this.slService.getBooks();
  }

}
