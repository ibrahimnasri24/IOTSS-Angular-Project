import { Component, OnInit } from '@angular/core';
import { Colors } from 'src/app/model/colors';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css'],
})
export class ColorPickerComponent implements OnInit {
  colors = Colors.getColors();
  maxW: string = '0px';

  constructor() {}

  openColorPicker = () => {
    this.maxW = '120px';
  };

  closeColorPicker = () => {
    this.maxW = '0px';
  };

  ngOnInit(): void {}
}
