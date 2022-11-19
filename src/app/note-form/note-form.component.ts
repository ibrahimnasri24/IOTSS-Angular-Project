import { Component, OnInit } from '@angular/core';
import { Note } from '../model/note';
import { Notes } from '../model/notes';
@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css'],
})
export class NoteFormComponent implements OnInit {
  nts: Notes = new Notes([]);

  noteTitle: string = '';
  noteContent: string = '';

  constructor() {}

  addNote = () => {
    this.nts.AddNote(this.noteTitle, this.noteContent, new Date(), new Date());
    console.log(this.nts);
  };

  ngOnInit(): void {}
}
