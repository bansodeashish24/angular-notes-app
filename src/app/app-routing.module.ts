import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteDetailsComponent } from './notes/note-details/note-details.component';
import { NotesListComponent } from './notes/notes-list/notes-list.component';
import { NotesComponent } from './notes/notes.component';
import { NotesModule } from './notes/notes.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'notes',
  },
  {
    path: 'notes',
    loadChildren: () => NotesModule,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
