import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurAltiumComponent } from './cur-altium.component';

describe('CurAltiumComponent', () => {
  let component: CurAltiumComponent;
  let fixture: ComponentFixture<CurAltiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurAltiumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurAltiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
