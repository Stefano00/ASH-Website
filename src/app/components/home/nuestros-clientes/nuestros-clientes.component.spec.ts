import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestrosClientesComponent } from './nuestros-clientes.component';

describe('NuestrosClientesComponent', () => {
  let component: NuestrosClientesComponent;
  let fixture: ComponentFixture<NuestrosClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuestrosClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuestrosClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
