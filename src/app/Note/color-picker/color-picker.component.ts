import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Colors } from 'src/app/model/colors';
import { Note } from 'src/app/model/note';
import { Notes } from 'src/app/model/notes';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css'],
})
export class ColorPickerComponent implements OnInit {
  @Input('noteId') noteId: Number = 0;

  colors = Colors.getColors();
  maxW: string = '0px';

  constructor() {}

  openColorPicker = () => {
    this.maxW = '300px';
  };

  closeColorPicker = () => {
    this.maxW = '0px';
  };

  @Output()
  colorChanged: EventEmitter<Note> = new EventEmitter<Note>();

  changeColor = (id: Number) => {
    Notes.changeColor(this.noteId, id);
    this.colorChanged.emit(
      Notes.getNotes().find((nt) => nt.id === this.noteId)
    );
  };

  ngOnInit(): void {}
}
