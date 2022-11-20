import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Color, Colors } from '../model/colors';
import { Font,Fonts } from '../model/fonts';
import { Notes } from '../model/notes';
@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css'],
})
export class NoteFormComponent implements OnInit {
  noteTitle: string = '';
  noteContent: string = '';
  color: Color = Colors.getRandomColor();
  font : Font = Fonts.getRandomFont();

  constructor(private router: Router) {}

  addNote = () => {
    console.log(Colors.getRandomColor());

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

  ngOnInit(): void {}
}
