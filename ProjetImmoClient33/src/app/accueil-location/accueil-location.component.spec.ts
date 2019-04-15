import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilLocationComponent } from './accueil-location.component';

describe('AccueilLocationComponent', () => {
  let component: AccueilLocationComponent;
  let fixture: ComponentFixture<AccueilLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
