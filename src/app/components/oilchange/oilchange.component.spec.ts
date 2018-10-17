import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OilchangeComponent } from './oilchange.component';

describe('OilchangeComponent', () => {
  let component: OilchangeComponent;
  let fixture: ComponentFixture<OilchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OilchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OilchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
