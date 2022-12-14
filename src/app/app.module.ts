import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteFormComponent } from './note-form/note-form.component';
import { NoteCardComponent } from './Note/note-card/note-card.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NotesContainerComponent } from './Note/notes-container/notes-container.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { ColorPickerComponent } from './Note/color-picker/color-picker.component';
import { FontPickerComponent } from './Note/font-picker/font-picker.component';
import { ColorPickerFormComponent } from './Note/color-picker-form/color-picker-form.component';
import { FontPickerFormComponent } from './Note/font-picker-form/font-picker-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteFormComponent,
    NoteCardComponent,
    HomeComponent,
    NotesContainerComponent,
    AddNoteComponent,
    ColorPickerComponent,
    FontPickerComponent,ColorPickerFormComponent,FontPickerFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
