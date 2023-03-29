import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth } from '@firebase/auth';
import { Book } from 'src/app/model/book';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-replacement',
  templateUrl: './replacement.component.html',
  styleUrls: ['./replacement.component.scss'],
})
export class ReplacementComponent {
  book: Book = {
    id: '',
    author: '',
    city: '',
    genre: '',
    isbn: '',
    title: '',
    userEmail: '',
  };
  id: string = '';
  author: string = '';
  city: string = '';
  genre: string = '';
  isbn: string = '';
  title: string = '';

  constructor(private fireauth: AngularFireAuth, private data: DataService) {}

  addBook() {
    if (
      !this.isbn ||
      !this.author ||
      !this.city ||
      !this.genre ||
      !this.title
    ) {
      alert('Fill all input fields');
    }
    this.book.id = '';
    this.book.author = this.author;
    this.book.city = this.city;
    this.book.genre = this.genre;
    this.book.isbn = this.isbn;
    this.book.title = this.title;
    this.book.userEmail = getAuth().currentUser?.email as string;

    this.data.addBook(this.book);
    this.resetForm();
  }

  private resetForm() {
    this.id = '';
    this.author = '';
    this.city = '';
    this.genre = '';
    this.isbn = '';
    this.title = '';
  }
}
