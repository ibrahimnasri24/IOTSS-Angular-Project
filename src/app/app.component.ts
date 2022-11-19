import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  collectionData,
  Firestore,
  collection,
  DocumentData,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Item {
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  item$: Observable<DocumentData>;
  constructor(private router: Router, private firestore: Firestore) {
    const col = collection(firestore, 'items');
    this.item$ = collectionData(col);
    console.log(this.item$);
  }
}
