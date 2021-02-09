import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistDesktopComponent } from './checklist-desktop.component';

describe('ChecklistDesktopComponent', () => {
  let component: ChecklistDesktopComponent;
  let fixture: ComponentFixture<ChecklistDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChecklistDesktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
