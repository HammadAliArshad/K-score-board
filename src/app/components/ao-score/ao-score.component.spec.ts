import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AoScoreComponent } from './ao-score.component';

describe('AoScoreComponent', () => {
  let component: AoScoreComponent;
  let fixture: ComponentFixture<AoScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AoScoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AoScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
