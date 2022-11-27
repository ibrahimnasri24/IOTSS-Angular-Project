import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Fonts, Font } from 'src/app/model/fonts';
import { Note } from 'src/app/model/note';
import { Notes } from 'src/app/model/notes';

@Component({
  selector: 'app-font-picker-form',
  templateUrl: './font-picker-form.component.html',
  styleUrls: ['./font-picker-form.component.css'],
})
export class FontPickerFormComponent implements OnInit {
  @Input('fontId') fontId: number = 0;
  fonts = Fonts.getFonts();
  maxW: string = '0px';

  constructor() {}

  @Output()
  fontChanged: EventEmitter<Font> = new EventEmitter<Font>();

  getFont = () => {
    // i tried to take a parameter id but it didnt work i tried this other method it also didnt work
    console.log((this.fontId + 1) % Fonts.fontCount);
    this.fontChanged.emit(Fonts.getFont((this.fontId + 1) % Fonts.fontCount));
  };
  ngOnInit(): void {}
}
