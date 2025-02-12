import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioFinanciacionComponent } from './formulario-financiacion.component';

describe('FormularioFinanciacionComponent', () => {
  let component: FormularioFinanciacionComponent;
  let fixture: ComponentFixture<FormularioFinanciacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioFinanciacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioFinanciacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
