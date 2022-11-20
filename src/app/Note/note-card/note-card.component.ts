import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Colors } from 'src/app/model/colors';
import { Note } from '../../model/note';
import { Notes } from '../../model/notes';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css'],
})
export class NoteCardComponent implements OnInit {
  @Input('note') note: Note = new Note(
    0,
    '',
    '',
    new Date(),
    new Date(),
    Colors.getRandomColor()
  );
  constructor() {}

  @Output()
  noteDeleted: EventEmitter<Note[]> = new EventEmitter<Note[]>();

  editingMode: Boolean = false;

  editON = () => {
    this.editingMode = true;
  };

  finishedEditing = () => {
    this.editingMode = false;
    Notes.deleteNote(this.note.id);
    Notes.AddNote(
      this.note.title,
      this.note.note,
      this.note.creationDate,
      new Date(),
      this.note.color
    );
  };

  delete = (id: Number) => {
    Notes.deleteNote(id);
    this.noteDeleted.emit(Notes.getNotes());
  };

  onColorChange(nt: Note) {
    this.note = nt;
  }

  ngOnInit(): void {}
}
