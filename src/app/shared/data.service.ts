import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private afs: AngularFirestore) {}

  //add book
  addBook(book: Book) {
    book.id = this.afs.createId();
    return this.afs.collection('/books').add(book);
  }

  getAllBooks() {
    return this.afs.collection('/books').snapshotChanges();
  }

  deleteBook(book: Book) {
    return this.afs.doc('/books/' + book.id).delete();
  }

  updateBook(book: Book) {
    this.deleteBook(book);
    this.updateBook(book);
  }
}
