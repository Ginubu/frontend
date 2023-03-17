import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesbkgComponent } from './detallesbkg.component';

describe('DetallesbkgComponent', () => {
  let component: DetallesbkgComponent;
  let fixture: ComponentFixture<DetallesbkgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesbkgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesbkgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
