import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranstornosDePersonalidadComponent } from './transtornos-de-personalidad.component';

describe('TranstornosDePersonalidadComponent', () => {
  let component: TranstornosDePersonalidadComponent;
  let fixture: ComponentFixture<TranstornosDePersonalidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranstornosDePersonalidadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranstornosDePersonalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
