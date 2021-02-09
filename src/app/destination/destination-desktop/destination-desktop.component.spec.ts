import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationDesktopComponent } from './destination-desktop.component';

describe('DestinationDesktopComponent', () => {
  let component: DestinationDesktopComponent;
  let fixture: ComponentFixture<DestinationDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinationDesktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
