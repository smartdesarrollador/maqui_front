import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotosPorTipoComponent } from './motos-por-tipo.component';

describe('MotosPorTipoComponent', () => {
  let component: MotosPorTipoComponent;
  let fixture: ComponentFixture<MotosPorTipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotosPorTipoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotosPorTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
