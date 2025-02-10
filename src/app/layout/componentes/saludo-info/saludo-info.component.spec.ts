import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludoInfoComponent } from './saludo-info.component';

describe('SaludoInfoComponent', () => {
  let component: SaludoInfoComponent;
  let fixture: ComponentFixture<SaludoInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaludoInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaludoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
