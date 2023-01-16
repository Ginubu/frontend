import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cur2AltiumComponent } from './cur2-altium.component';

describe('Cur2AltiumComponent', () => {
  let component: Cur2AltiumComponent;
  let fixture: ComponentFixture<Cur2AltiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cur2AltiumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cur2AltiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
