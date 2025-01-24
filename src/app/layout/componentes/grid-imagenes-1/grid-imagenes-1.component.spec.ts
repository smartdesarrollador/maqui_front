import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridImagenes1Component } from './grid-imagenes-1.component';

describe('GridImagenes1Component', () => {
  let component: GridImagenes1Component;
  let fixture: ComponentFixture<GridImagenes1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridImagenes1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridImagenes1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
