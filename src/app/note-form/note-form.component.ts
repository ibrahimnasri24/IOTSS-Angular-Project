import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Notes } from '../model/notes';
@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css'],
})
export class NoteFormComponent implements OnInit {
  noteTitle: string = '';
  noteContent: string = '';

  constructor(private router: Router) {}

  addNote = () => {
    if (this.noteTitle == '') {
    } else {
      Notes.AddNote(this.noteTitle, this.noteContent, new Date(), new Date());
      this.router.navigate(['']);
    }
  };

  ngOnInit(): void {}
}
