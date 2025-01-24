import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsPsicologicosComponent } from './tips-psicologicos.component';

describe('TipsPsicologicosComponent', () => {
  let component: TipsPsicologicosComponent;
  let fixture: ComponentFixture<TipsPsicologicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipsPsicologicosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipsPsicologicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
