import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cur1MetAgilComponent } from './cur1-met-agil.component';

describe('Cur1MetAgilComponent', () => {
  let component: Cur1MetAgilComponent;
  let fixture: ComponentFixture<Cur1MetAgilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cur1MetAgilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cur1MetAgilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
