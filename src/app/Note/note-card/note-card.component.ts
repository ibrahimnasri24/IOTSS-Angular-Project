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
    '',
    '',
    new Date(),
    new Date(),
    Colors.getRandomColor()
  );
  constructor() {}

  @Output()
  noteDeleted: EventEmitter<Note[]> = new EventEmitter<Note[]>();

  delete = (id: Number) => {
    Notes.deleteNote(id);
    this.noteDeleted.emit(Notes.getNotes());
  };

  ngOnInit(): void {}
}
