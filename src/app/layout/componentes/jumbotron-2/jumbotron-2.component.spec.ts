import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jumbotron2Component } from './jumbotron-2.component';

describe('Jumbotron2Component', () => {
  let component: Jumbotron2Component;
  let fixture: ComponentFixture<Jumbotron2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Jumbotron2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jumbotron2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
