import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailComponent } from './articles/article-detail/article-detail.component';
import { ArticleListComponent } from './articles/article-list/article-list.component';
import { ArticlesComponent } from './articles/articles.component';
import { AuthGuard } from './auth/auth.guard';
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
    path: 'article-list',
    canActivate: [AuthGuard],
    component: ArticleListComponent,
  },
  {
    path: 'article-detail',
    canActivate: [AuthGuard],
    component: ArticleDetailComponent,
  },
  {
    path: 'articles',
    component: ArticlesComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list',
      },
      {
        path: 'list',
        component: ArticleListComponent,
      },
      {
        path: 'detail',
        component: ArticleDetailComponent,
      },
    ],
  },
  {
    path: 'notes',
    // loadChildren: () => NotesModule,
    loadChildren: () =>
      import('../app/notes/notes.module').then((m) => m.NotesModule),
  },
  {
    // wildcard routes
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
