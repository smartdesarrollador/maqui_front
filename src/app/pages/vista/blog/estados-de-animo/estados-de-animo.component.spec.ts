import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadosDeAnimoComponent } from './estados-de-animo.component';

describe('EstadosDeAnimoComponent', () => {
  let component: EstadosDeAnimoComponent;
  let fixture: ComponentFixture<EstadosDeAnimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstadosDeAnimoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadosDeAnimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
