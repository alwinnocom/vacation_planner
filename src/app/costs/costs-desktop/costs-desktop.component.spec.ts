import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostsDesktopComponent } from './costs-desktop.component';

describe('CostsDesktopComponent', () => {
  let component: CostsDesktopComponent;
  let fixture: ComponentFixture<CostsDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostsDesktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostsDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
