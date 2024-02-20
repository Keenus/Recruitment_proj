import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementsSectionComponent } from './achievements-section.component';

describe('AchievementsSectionComponent', () => {
  let component: AchievementsSectionComponent;
  let fixture: ComponentFixture<AchievementsSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AchievementsSectionComponent]
    });
    fixture = TestBed.createComponent(AchievementsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
