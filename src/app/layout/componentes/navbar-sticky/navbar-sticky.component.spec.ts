import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarStickyComponent } from './navbar-sticky.component';

describe('NavbarStickyComponent', () => {
  let component: NavbarStickyComponent;
  let fixture: ComponentFixture<NavbarStickyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarStickyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarStickyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
