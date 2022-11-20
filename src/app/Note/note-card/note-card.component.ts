import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Colors } from 'src/app/model/colors';
import { Note } from '../../model/note';
import { Notes } from '../../model/notes';
import { Fonts } from 'src/app/model/fonts';
import { FontPickerComponent } from '../font-picker/font-picker.component';

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
    Colors.getRandomColor(),
    Fonts.getRandomFont(),
  );
  constructor() {}

  @Output()
  noteDeleted: EventEmitter<Note[]> = new EventEmitter<Note[]>();

  delete = (id: Number) => {
    Notes.deleteNote(id);
    this.noteDeleted.emit(Notes.getNotes());
  };

  onColorChange(nt: Note) {
    this.note = nt;
  }
  onFontChange(nt: Note) {
    this.note = nt;
  }

  ngOnInit(): void {}
}
