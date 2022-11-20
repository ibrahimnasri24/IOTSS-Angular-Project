import { Component, Input } from '@angular/core';
import { Note } from '../model/note';
import { Notes } from '../model/notes';

@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.css'],
})
export class NotesContainerComponent {
  notes: Note[] = Notes.getNotes();

  onNoteDeleted(notes: Note[]) {
    this.notes = notes;
  }
}
