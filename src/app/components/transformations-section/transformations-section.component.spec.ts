import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformationsSectionComponent } from './transformations-section.component';

describe('TransformationsSectionComponent', () => {
  let component: TransformationsSectionComponent;
  let fixture: ComponentFixture<TransformationsSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransformationsSectionComponent]
    });
    fixture = TestBed.createComponent(TransformationsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
