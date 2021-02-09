import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationMobileComponent } from './destination-mobile.component';

describe('DestinationMobileComponent', () => {
  let component: DestinationMobileComponent;
  let fixture: ComponentFixture<DestinationMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinationMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
