import { Color } from './colors';
import { Note } from './note';

export class Notes {
  private notes: Note[];

  private static notesSingleton: Notes = new Notes(
    JSON.parse(<string>localStorage.getItem('notes'))
  );

  private constructor(notes: Note[]) {
    if (notes == null) {
      this.notes = [];
    } else {
      this.notes = notes;
    }
  }

  public static AddNote = (
    title: string,
    content: string,
    creationDate: Date,
    lastEditDate: Date,
    color: Color
  ) => {
    Notes.notesSingleton.notes.push(
      new Note(title, content, creationDate, lastEditDate, color)
    );
    localStorage.setItem('notes', JSON.stringify(Notes.notesSingleton.notes));
  };

  public static getNotes = () => {
    return Notes.notesSingleton.notes;
  };

  public static deleteNote = (id: Number) => {
    Notes.notesSingleton = new Notes(
      Notes.notesSingleton.notes.filter((note) => {
        return id != note.id;
      })
    );
    localStorage.setItem('notes', JSON.stringify(Notes.notesSingleton.notes));
  };
}
