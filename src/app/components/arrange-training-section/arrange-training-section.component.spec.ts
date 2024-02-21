import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrangeTrainingSectionComponent } from './arrange-training-section.component';

describe('ArrangeTrainingSectionComponent', () => {
  let component: ArrangeTrainingSectionComponent;
  let fixture: ComponentFixture<ArrangeTrainingSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArrangeTrainingSectionComponent]
    });
    fixture = TestBed.createComponent(ArrangeTrainingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
