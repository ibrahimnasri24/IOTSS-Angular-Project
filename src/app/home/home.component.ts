import { Component, OnInit } from '@angular/core';
import { Note } from '../model/note';
import { Notes } from '../model/notes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  notes: Note[] = Notes.getNotes();
  constructor() {}

  ngOnInit(): void {}
}
