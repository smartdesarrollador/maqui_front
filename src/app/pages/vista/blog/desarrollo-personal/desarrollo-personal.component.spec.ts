import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesarrolloPersonalComponent } from './desarrollo-personal.component';

describe('DesarrolloPersonalComponent', () => {
  let component: DesarrolloPersonalComponent;
  let fixture: ComponentFixture<DesarrolloPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesarrolloPersonalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesarrolloPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
