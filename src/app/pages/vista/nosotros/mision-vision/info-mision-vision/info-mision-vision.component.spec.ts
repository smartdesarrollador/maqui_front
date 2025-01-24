import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMisionVisionComponent } from './info-mision-vision.component';

describe('InfoMisionVisionComponent', () => {
  let component: InfoMisionVisionComponent;
  let fixture: ComponentFixture<InfoMisionVisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoMisionVisionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoMisionVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
