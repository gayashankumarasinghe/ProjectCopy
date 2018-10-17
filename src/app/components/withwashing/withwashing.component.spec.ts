import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithwashingComponent } from './withwashing.component';

describe('WithwashingComponent', () => {
  let component: WithwashingComponent;
  let fixture: ComponentFixture<WithwashingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithwashingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithwashingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
