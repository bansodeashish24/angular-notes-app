import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteCardComponent } from './note-card/note-card.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NoteDetailsComponent } from './note-details/note-details.component';
import { NotesComponent } from './notes.component';
import { NotesRoutingModule } from './notes.routes';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    NoteCardComponent,
    NotesListComponent,
    NoteDetailsComponent,
    NotesComponent,
  ],
  imports: [CommonModule, NotesRoutingModule, MatIconModule, MatMenuModule],
})
export class NotesModule {}
