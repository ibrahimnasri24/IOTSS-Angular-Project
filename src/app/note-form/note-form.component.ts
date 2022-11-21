import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Color, Colors } from '../model/colors';
import { Font,Fonts } from '../model/fonts';
import { Notes } from '../model/notes';
import { Note } from '../model/note';
import { getLocaleDateFormat } from '@angular/common';




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
    Fonts.getRandomFont(),
  );
  noteTitle: string = '';
  noteContent: string = '';
  color: Color= Colors.getRandomColor();
  font : Font = Fonts.getRandomFont();

  constructor(private router: Router) {}

  addNote = () => {
    console.log(Colors.getColor(this.color.id));
    this.color = Colors.getColor(this.color.id);
    console.log(this.color);

    if (this.noteTitle == '') {
    } else {
      Notes.AddNote(
        this.noteTitle,
        this.noteContent,
        new Date(),
        new Date(),
        this.color,
        this.font,
        
      );
      this.router.navigate(['']);
    }
  };
  onColorChange(nt: Note) {
    this.note = nt;
  }

  ngOnInit(): void {}
}
