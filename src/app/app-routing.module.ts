import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { BooksComponent } from "./books/books.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { NgModule } from "@angular/core";
import { BookDetailComponent } from "./books/book-detail/book-detail.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'books', component: BooksComponent },
    { path: 'books/:id', component: BookDetailComponent },
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}