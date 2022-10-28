import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss'],
})
export class NoteCardComponent implements OnInit {
  constructor() {}

  @Input() title = '';
  @Input() noteContents = '';

  @Output() cardClicked = new EventEmitter();
  @Output() deleteClicked = new EventEmitter();

  ngOnInit(): void {}

  onCardClick() {
    this.cardClicked.emit();
  }

  onDeleteClick() {
    this.deleteClicked.emit();
  }
}
