import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistMobileComponent } from './checklist-mobile.component';

describe('ChecklistMobileComponent', () => {
  let component: ChecklistMobileComponent;
  let fixture: ComponentFixture<ChecklistMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChecklistMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
