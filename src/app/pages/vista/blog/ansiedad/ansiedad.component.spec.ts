import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnsiedadComponent } from './ansiedad.component';

describe('AnsiedadComponent', () => {
  let component: AnsiedadComponent;
  let fixture: ComponentFixture<AnsiedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnsiedadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnsiedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
