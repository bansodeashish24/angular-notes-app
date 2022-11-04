import { Component, Input, OnInit, Output } from '@angular/core';
import { Note } from '../notes.model';
import { NotesService } from '../notes.service';
import { MatSidenav } from '@angular/material/sidenav';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonSharedService } from 'src/app/common-shared.service';

@Component({
  selector: 'app-notes-details-reactive',
  templateUrl: './notes-details-reactive.component.html',
  styleUrls: ['./notes-details-reactive.component.scss'],
})
export class NotesDetailsReactiveComponent implements OnInit {
  @Input() noteId: any = '';
  @Input() sidenavReference!: MatSidenav;
  note: Note = {
    id: '',
    title: '',
    contents: '',
  };

  noteForm = new FormGroup({
    title: new FormControl(''),
    contents: new FormControl(''),
  });

  constructor(
    private notesService: NotesService,
    private commonSharedService: CommonSharedService
  ) {}

  ngOnInit(): void {}

  ngOnChanges() {
    this.initializeNoteForm();
  }

  initializeNoteForm() {
    console.log(this.noteId, 'here');
    if (this.noteId) {
      this.note = this.notesService.getNote(this.noteId);
      this.noteForm.controls.title.setValue(this.note.title);
      this.noteForm.controls.contents.setValue(this.note.contents);
    }
  }

  saveNote() {
    this.note.title = this.noteForm.value.title!;
    this.note.contents = this.noteForm.value.contents!;
    this.notesService.updateNote(this.note.id, this.note);
    this.closeSidenav();
  }

  closeSidenav() {
    this.noteId = '';
    this.resetForm();
    this.commonSharedService.refreshListSubject.next(true);
    this.sidenavReference.close();
  }

  resetTitle() {
    this.noteForm.controls.title.reset('');
  }

  resetForm() {
    this.noteForm.reset({ title: '', contents: '' });
  }
}
