import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesDetailsReactiveComponent } from './notes-details-reactive.component';

describe('NotesDetailsReactiveComponent', () => {
  let component: NotesDetailsReactiveComponent;
  let fixture: ComponentFixture<NotesDetailsReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesDetailsReactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesDetailsReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
