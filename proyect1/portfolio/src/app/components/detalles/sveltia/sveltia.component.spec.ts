import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SveltiaComponent } from './sveltia.component';

describe('SveltiaComponent', () => {
  let component: SveltiaComponent;
  let fixture: ComponentFixture<SveltiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SveltiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SveltiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
