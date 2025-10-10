import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fichapersonaje } from './fichapersonaje';

describe('Fichapersonaje', () => {
  let component: Fichapersonaje;
  let fixture: ComponentFixture<Fichapersonaje>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fichapersonaje]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fichapersonaje);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
