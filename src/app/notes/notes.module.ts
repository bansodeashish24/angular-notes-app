import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteCardComponent } from './note-card/note-card.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NoteDetailsComponent } from './note-details/note-details.component';
import { NotesComponent } from './notes.component';
import { NotesRoutingModule } from './notes.routes';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotesDetailsReactiveComponent } from './notes-details-reactive/notes-details-reactive.component';

@NgModule({
  declarations: [
    NoteCardComponent,
    NotesListComponent,
    NoteDetailsComponent,
    NotesComponent,
    NotesDetailsReactiveComponent,
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class NotesModule {}
