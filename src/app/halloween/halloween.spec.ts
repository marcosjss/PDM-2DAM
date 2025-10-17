import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Halloween } from './halloween';

describe('Halloween', () => {
  let component: Halloween;
  let fixture: ComponentFixture<Halloween>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Halloween]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Halloween);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
