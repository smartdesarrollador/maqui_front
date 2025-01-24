import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionImagenesComponent } from './section-imagenes.component';

describe('SectionImagenesComponent', () => {
  let component: SectionImagenesComponent;
  let fixture: ComponentFixture<SectionImagenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionImagenesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionImagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
