import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstresComponent } from './estres.component';

describe('EstresComponent', () => {
  let component: EstresComponent;
  let fixture: ComponentFixture<EstresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
