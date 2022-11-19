import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../model/note';
import { Notes } from '../model/notes';

@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.css'],
})
export class NotesContainerComponent implements OnInit {
  notes: Note[] = Notes.getNotes();

  constructor() {}

  ngOnInit(): void {}
}
