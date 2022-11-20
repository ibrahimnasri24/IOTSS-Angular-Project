import { Notes } from './notes';

export class Note {
  public id: Number;
  constructor(
    public title: string,
    public note: string,
    public creationDate: Date,
    public lastEdittDate: Date
  ) {
    this.id = Notes.getNotes().length + 1000;
  }
}
