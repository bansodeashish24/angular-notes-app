import { Injectable } from '@angular/core';
import { Note } from './notes.model';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  constructor() {}

  createNote(newNote: Note): void {
    const notes = this.getAllNotes();
    notes.push(newNote);
    localStorage.setItem('notes', JSON.stringify(notes));
  }

  getNote(noteId: string): Note | undefined {
    const notes = this.getAllNotes();
    return notes.find((note) => note.id === noteId);
  }

  updateNote(noteId: string, updatedNote: Note): void {
    const notes = this.getAllNotes();
    const noteIndex = notes.findIndex((note) => note.id === noteId);
    if (noteIndex) {
      notes.splice(noteIndex, 1, updatedNote);
    }
    localStorage.setItem('notes', JSON.stringify(notes));
  }

  deleteNote(noteId: string): void {
    const notes = this.getAllNotes();
    const noteIndex = notes.findIndex((note) => note.id === noteId);
    if (noteIndex) {
      notes.splice(noteIndex, 1);
    }
    localStorage.setItem('notes', JSON.stringify(notes));
  }

  getAllNotes(): Note[] {
    const notes = localStorage.getItem('notes')
      ? JSON.parse(localStorage.getItem('notes')!)
      : [];
    return notes;
  }
}
