import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTiposMotosComponent } from './section-tipos-motos.component';

describe('SectionTiposMotosComponent', () => {
  let component: SectionTiposMotosComponent;
  let fixture: ComponentFixture<SectionTiposMotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionTiposMotosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionTiposMotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
