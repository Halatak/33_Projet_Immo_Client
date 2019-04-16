import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilAchatComponent } from './accueil-achat.component';

describe('AccueilAchatComponent', () => {
  let component: AccueilAchatComponent;
  let fixture: ComponentFixture<AccueilAchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilAchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
