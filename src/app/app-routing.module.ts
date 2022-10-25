import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteDetailsComponent } from './notes/note-details/note-details.component';
import { NotesListComponent } from './notes/notes-list/notes-list.component';
import { NotesComponent } from './notes/notes.component';
import { NotesModule } from './notes/notes.module';

const routes: Routes = [
  {
    path: 'notes',
    loadChildren: () => NotesModule,
  },
  {
    path: '**',
    redirectTo: 'notes',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
