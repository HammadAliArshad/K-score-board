import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkaScoreComponent } from './aka-score.component';

describe('AkaScoreComponent', () => {
  let component: AkaScoreComponent;
  let fixture: ComponentFixture<AkaScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AkaScoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AkaScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
