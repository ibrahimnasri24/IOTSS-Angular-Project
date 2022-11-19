import { Note } from './note';

export class Notes {
  constructor(private notes: Note[]) {}

  AddNote = (
    title: string,
    content: string,
    creationDate: Date,
    lastEditDate: Date
  ) => {
    this.notes.push(new Note(title, content, creationDate, lastEditDate));
  };
}
