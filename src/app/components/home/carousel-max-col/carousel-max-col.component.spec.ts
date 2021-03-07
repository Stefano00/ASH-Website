import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselMaxColComponent } from './carousel-max-col.component';

describe('CarouselMaxColComponent', () => {
  let component: CarouselMaxColComponent;
  let fixture: ComponentFixture<CarouselMaxColComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselMaxColComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselMaxColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
