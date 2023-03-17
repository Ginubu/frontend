import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurMetComponent } from './cur-met.component';

describe('CurMetComponent', () => {
  let component: CurMetComponent;
  let fixture: ComponentFixture<CurMetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurMetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurMetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
