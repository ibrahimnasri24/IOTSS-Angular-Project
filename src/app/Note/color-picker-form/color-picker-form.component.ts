import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Colors } from 'src/app/model/colors';
import { Color } from 'src/app/model/colors';

import { Note } from 'src/app/model/note';
import { Notes } from 'src/app/model/notes';

@Component({
  selector: 'app-color-picker-form',
  templateUrl: './color-picker-form.component.html',
  styleUrls: ['./color-picker-form.component.css'],
})
export class ColorPickerFormComponent implements OnInit {
  @Input('colorId') colorId: Number=0;

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
  colorChanged: EventEmitter<Color> = new EventEmitter<Color>();

  getColor = (id: Number) => {
    Colors.getColor(this.colorId);
    this.colorChanged.emit(
      Colors.getColors().find((color) => color.id === this.colorId)
    );
    
  };

  ngOnInit(): void {}
}
