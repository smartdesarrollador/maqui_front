import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbotronImagenComponent } from './jumbotron-imagen.component';

describe('JumbotronImagenComponent', () => {
  let component: JumbotronImagenComponent;
  let fixture: ComponentFixture<JumbotronImagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JumbotronImagenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JumbotronImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
