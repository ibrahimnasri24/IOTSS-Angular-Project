import { Color, Colors } from './colors';
import { Notes } from './notes';

export class Note {
  public constructor(
    public id: Number,
    public title: string,
    public note: string,
    public creationDate: Date,
    public lastEdittDate: Date,
    public color: Color
  ) {}

  public changeColor = (colorId: Number) => {
    this.color = Colors.getColor(colorId);
  };
}
