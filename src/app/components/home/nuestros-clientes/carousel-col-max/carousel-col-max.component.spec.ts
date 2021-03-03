import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselColMaxComponent } from './carousel-col-max.component';

describe('CarouselColMaxComponent', () => {
  let component: CarouselColMaxComponent;
  let fixture: ComponentFixture<CarouselColMaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselColMaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselColMaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
