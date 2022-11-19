import { Component, OnInit } from '@angular/core';
import { Note } from '../model/note';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {
  nt :Note = new Note("","");
  constructor() { }

  ngOnInit(): void {
  }

}
