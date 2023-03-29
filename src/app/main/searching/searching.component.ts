import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-searching',
  templateUrl: './searching.component.html',
  styleUrls: ['./searching.component.scss'],
})
export class SearchingComponent implements OnInit {
  booksList!: Book[];

  constructor(private data: DataService) {}

  getAllBooks() {
    this.data.getAllBooks().subscribe(
      (res) => {
        this.booksList = res.map((e: any) => {
          const data = e.payload.doc.data();
          data.id = e.payload.doc.id;
          return data;
        });
      },
      (err) => {
        alert(`Error while fetching books data`);
      }
    );
  }
  ngOnInit(): void {
    this.getAllBooks();
  }
}
