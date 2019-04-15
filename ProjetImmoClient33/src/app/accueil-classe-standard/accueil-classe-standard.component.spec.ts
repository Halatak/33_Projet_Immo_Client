import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilClasseStandardComponent } from './accueil-classe-standard.component';

describe('AccueilClasseStandardComponent', () => {
  let component: AccueilClasseStandardComponent;
  let fixture: ComponentFixture<AccueilClasseStandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilClasseStandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilClasseStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
