import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostVentaDescripcionComponent } from './post-venta-descripcion.component';

describe('PostVentaDescripcionComponent', () => {
  let component: PostVentaDescripcionComponent;
  let fixture: ComponentFixture<PostVentaDescripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostVentaDescripcionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostVentaDescripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
