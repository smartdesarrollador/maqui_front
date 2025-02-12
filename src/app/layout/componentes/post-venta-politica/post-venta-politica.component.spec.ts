import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostVentaPoliticaComponent } from './post-venta-politica.component';

describe('PostVentaPoliticaComponent', () => {
  let component: PostVentaPoliticaComponent;
  let fixture: ComponentFixture<PostVentaPoliticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostVentaPoliticaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostVentaPoliticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
