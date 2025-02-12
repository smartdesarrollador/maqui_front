import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostVentaRecomendacionesComponent } from './post-venta-recomendaciones.component';

describe('PostVentaRecomendacionesComponent', () => {
  let component: PostVentaRecomendacionesComponent;
  let fixture: ComponentFixture<PostVentaRecomendacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostVentaRecomendacionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostVentaRecomendacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
