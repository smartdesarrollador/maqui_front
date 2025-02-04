import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMotosComponent } from './menu-motos.component';

describe('MenuMotosComponent', () => {
  let component: MenuMotosComponent;
  let fixture: ComponentFixture<MenuMotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuMotosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuMotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
