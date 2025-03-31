import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparadorMotosComponent } from './comparador-motos.component';

describe('ComparadorMotosComponent', () => {
  let component: ComparadorMotosComponent;
  let fixture: ComponentFixture<ComparadorMotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComparadorMotosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComparadorMotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
