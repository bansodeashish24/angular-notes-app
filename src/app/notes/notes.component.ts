import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { CommonSharedService } from '../common-shared.service';
import { Note } from './notes.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  openSidenavSubscription: any;
  noteId: string = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private commonSharedService: CommonSharedService
  ) {}

  ngOnInit(): void {
    this.openSidenavSubscription =
      this.commonSharedService.openNoteDetailsSidenav.subscribe((noteId) => {
        this.toggleSidenav(noteId);
      });
  }

  ngOnDestroy() {
    this.openSidenavSubscription.unsubscribe();
  }

  goToNotesList() {
    // this.router.navigate(['list'], { relativeTo: this.activatedRoute });
    this.router.navigateByUrl('notes/list');
  }

  toggleSidenav(noteId: any) {
    this.noteId = noteId;
    this.sidenav.toggle();
  }
}
