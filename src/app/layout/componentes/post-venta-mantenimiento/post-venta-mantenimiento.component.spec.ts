import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostVentaMantenimientoComponent } from './post-venta-mantenimiento.component';

describe('PostVentaMantenimientoComponent', () => {
  let component: PostVentaMantenimientoComponent;
  let fixture: ComponentFixture<PostVentaMantenimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostVentaMantenimientoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostVentaMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
