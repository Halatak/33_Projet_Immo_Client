import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilBienImmobilierComponent } from './accueil-bien-immobilier.component';

describe('AccueilBienImmobilierComponent', () => {
  let component: AccueilBienImmobilierComponent;
  let fixture: ComponentFixture<AccueilBienImmobilierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilBienImmobilierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilBienImmobilierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
