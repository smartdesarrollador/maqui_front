import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMotosComponent } from './footer-motos.component';

describe('FooterMotosComponent', () => {
  let component: FooterMotosComponent;
  let fixture: ComponentFixture<FooterMotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterMotosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterMotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
