import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '../notes.model';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss'],
})
export class NoteDetailsComponent implements OnInit {
  note: Note = {
    id: '',
    title: '',
    contents: '',
  };

  isEditMode = false;

  constructor(
    private notesService: NotesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.note.id = this.activatedRoute.snapshot.params['id'];
    this.isEditMode = !!this.note.id;
    if (this.isEditMode) {
      this.note = this.notesService.getNote(this.note.id);
    } else {
      this.note = {
        id: '',
        title: '',
        contents: '',
      };
    }
  }

  saveNote() {
    if (this.isEditMode) {
      this.notesService.updateNote(this.note.id, this.note);
    } else {
      this.notesService.createNote(this.note);
    }
    this.router.navigateByUrl('notes/list');
  }

  redirectToNotesList() {
    // this.router.navigate(['../../list'], { relativeTo: this.activatedRoute });

    // this.router.navigate(['../list'], { relativeTo: this.activatedRoute });
    this.router.navigateByUrl('notes/list');
  }
}
