import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComUnoComponent } from './com-uno.component';

describe('ComUnoComponent', () => {
  let component: ComUnoComponent;
  let fixture: ComponentFixture<ComUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComUnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
