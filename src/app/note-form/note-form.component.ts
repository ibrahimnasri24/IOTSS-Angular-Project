import { Component, OnInit } from '@angular/core';
import { Note } from '../model/note';
import { Notes } from '../model/notes';
@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css'],
})
export class NoteFormComponent implements OnInit {
  noteTitle: string = '';
  noteContent: string = '';

  constructor() {}

  addNote = () => {
    Notes.AddNote(this.noteTitle, this.noteContent, new Date(), new Date());
    console.log(Notes.getNotes());
  };

  ngOnInit(): void {}
}
