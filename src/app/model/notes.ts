import { Color } from './colors';
import { Note } from './note';
import {Font} from './fonts';

export class Notes {
  private notes: Note[];

  private static notesSingleton: Notes = new Notes(
    JSON.parse(<string>localStorage.getItem('notes'))
  );

  private constructor(notes: Note[]) {
    if (notes == null) {
      this.notes = [];
    } else {
      this.notes = notes.map((nt) => {
        return new Note(
          nt.id,
          nt.title,
          nt.note,
          nt.creationDate,
          nt.lastEdittDate,
          nt.color,
          nt.font,
        );
      });
    }
  }

  public static AddNote = (
    title: string,
    content: string,
    creationDate: Date,
    lastEditDate: Date,
    color: Color,
    font : Font
  ) => {
    Notes.notesSingleton.notes.push(
      new Note(
        Notes.notesSingleton.notes.length + 1000,
        title,
        content,
        creationDate,
        lastEditDate,
        color,
        font
      )
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

  public static changeColor = (noteId: Number, colorId: Number) => {
    Notes.notesSingleton = new Notes(
      Notes.notesSingleton.notes.map((note) => {
        if (note.id === noteId) {
          note.changeColor(colorId);
          return note;
        }
        return note;
      })
    );
    localStorage.setItem('notes', JSON.stringify(Notes.notesSingleton.notes));
  };
  public static changeFont = (noteId: Number, fontId: Number) => {
    Notes.notesSingleton = new Notes(
      Notes.notesSingleton.notes.map((note) => {
        if (note.id === noteId) {
          note.changeFont(fontId);
          return note;
        }
        return note;
      })
    );
    localStorage.setItem('notes', JSON.stringify(Notes.notesSingleton.notes));
  };
  public static editNote = (id: Number, title: string, content: string) => {
    Notes.notesSingleton = new Notes(
      Notes.notesSingleton.notes.map((note) => {
        if (note.id === id) {
          note.title = title;
          note.note = content;
          note.lastEdittDate = new Date();
          return note;
        }
        return note;
      })
    );
    localStorage.setItem('notes', JSON.stringify(Notes.notesSingleton.notes));
  };

}
