import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eyecandy } from './eyecandy';

describe('Eyecandy', () => {
  let component: Eyecandy;
  let fixture: ComponentFixture<Eyecandy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eyecandy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eyecandy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
