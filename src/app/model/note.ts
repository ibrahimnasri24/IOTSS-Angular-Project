import { Color, Colors } from './colors';
import { Notes } from './notes';
import { Font, Fonts } from './fonts';

export class Note {
  public constructor(
    public id: number,
    public title: string,
    public note: string,
    public creationDate: Date,
    public lastEdittDate: Date,
    public color: Color,
    public font: Font
  ) {}

  public changeColor = (colorId: Number) => {
    this.color = Colors.getColor(colorId);
  };
  public changeFont = (fontId: number) => {
    this.font = Fonts.getFont(fontId);
  };
}
