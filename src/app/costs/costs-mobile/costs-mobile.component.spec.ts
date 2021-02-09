import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostsMobileComponent } from './costs-mobile.component';

describe('CostsMobileComponent', () => {
  let component: CostsMobileComponent;
  let fixture: ComponentFixture<CostsMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostsMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostsMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
