import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheBienImmobilierComponent } from './recherche-bien-immobilier.component';

describe('RechercheBienImmobilierComponent', () => {
  let component: RechercheBienImmobilierComponent;
  let fixture: ComponentFixture<RechercheBienImmobilierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheBienImmobilierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheBienImmobilierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
