import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesosProductivosIndustrialesComponent } from './procesos-productivos-industriales.component';

describe('ProcesosProductivosIndustrialesComponent', () => {
  let component: ProcesosProductivosIndustrialesComponent;
  let fixture: ComponentFixture<ProcesosProductivosIndustrialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcesosProductivosIndustrialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcesosProductivosIndustrialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
