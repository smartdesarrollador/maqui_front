import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonWhatsappComponent } from './boton-whatsapp.component';

describe('BotonWhatsappComponent', () => {
  let component: BotonWhatsappComponent;
  let fixture: ComponentFixture<BotonWhatsappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonWhatsappComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotonWhatsappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
