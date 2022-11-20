import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Fonts } from 'src/app/model/fonts';
import { Note } from 'src/app/model/note';
import { Notes } from 'src/app/model/notes';

@Component({
  selector: 'app-font-picker',
  templateUrl: './font-picker.component.html',
  styleUrls: ['./font-picker.component.css'],
})
export class FontPickerComponent implements OnInit {
  @Input('noteId') noteId: Number = 0;

  fonts = Fonts.getFonts();
  maxW: string = '0px';

  constructor() {}

  @Output()
  fontChanged: EventEmitter<Note> = new EventEmitter<Note>();

  nextFont = () => {
    const nt: Note | undefined = Notes.getNotes().find(
      (nt) => nt.id === this.noteId
    );
    if (!nt) {
      return;
    }
    Notes.changeFont(this.noteId, (nt.font.id + 1) % Fonts.fontCount);
    this.fontChanged.emit(Notes.getNotes().find((nt) => nt.id === this.noteId));
  };

  ngOnInit(): void {}
}
