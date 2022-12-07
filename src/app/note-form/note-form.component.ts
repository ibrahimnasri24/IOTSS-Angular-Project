import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Color, Colors } from '../model/colors';
import { Font, Fonts } from '../model/fonts';
import { Notes } from '../model/notes';
import { Note } from '../model/note';
import { ColorPickerFormComponent } from '../Note/color-picker-form/color-picker-form.component';
import { getLocaleDateFormat } from '@angular/common';
import { FontPickerFormComponent } from '../Note/font-picker-form/font-picker-form.component';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css'],
})
export class NoteFormComponent implements OnInit {
  @Input('note') note: Note = new Note(
    0,
    '',
    '',
    new Date(),
    new Date(),

    Colors.getRandomColor(),
    Fonts.getRandomFont()
  );
  noteTitle: string = '';
  noteContent: string = '';
  color: Color = Colors.getRandomColor();
  font: Font = Fonts.getRandomFont();

  noTitle: Boolean = false;

  constructor(private router: Router) {}

  addNote = () => {
    console.log(Colors.getColor(this.color.id));
    this.color = Colors.getColor(this.color.id);
    this.font = Fonts.getFont(this.font.id);
    console.log(this.color);
    console.log(this.font);
    if (this.noteTitle == '') {
      this.noTitle = true;
      setTimeout(() => {
        this.noTitle = false;
      }, 3000);
    } else {
      Notes.AddNote(
        this.noteTitle,
        this.noteContent,
        new Date(),
        new Date(),
        this.color,
        this.font
      );
      this.router.navigate(['']);
    }
  };

  onColorChange(clr: Color) {
    console.log(clr);

    this.color = clr;
  }
  onFontChange(ft: Font) {
    console.log(ft);
    this.font = ft;
  }
  ngOnInit(): void {}
}
