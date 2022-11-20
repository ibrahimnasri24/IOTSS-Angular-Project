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
    lastEditDate: Date
  ) => {
    Notes.notesSingleton.notes.push(
      new Note(title, content, creationDate, lastEditDate)
    );
    localStorage.setItem('notes', JSON.stringify(Notes.notesSingleton.notes));
  };

  public static getNotes = () => {
    console.log('Getting notes');

    return Notes.notesSingleton.notes;
  };

  public static deleteNote = (id: Number) => {
    Notes.notesSingleton = new Notes(
      Notes.notesSingleton.notes.filter((note) => {
        console.log(id, note.id, id !== note.id);
        return id != note.id;
      })
    );
    console.log(Notes.notesSingleton.notes);
    localStorage.setItem('notes', JSON.stringify(Notes.notesSingleton.notes));
  };
}
