import { Note } from './note';

export class Notes {
  private static notesSingleton: Notes = new Notes([]);
  private constructor(public notes: Note[]) {}

  static AddNote = (
    title: string,
    content: string,
    creationDate: Date,
    lastEditDate: Date
  ) => {
    Notes.notesSingleton.notes.push(
      new Note(title, content, creationDate, lastEditDate)
    );
    localStorage.setItem('notes', JSON.stringify(Notes.notesSingleton.notes));
  };

  static getNotes = () => {
    return JSON.parse(<string>localStorage.getItem('notes'));
  };
}
