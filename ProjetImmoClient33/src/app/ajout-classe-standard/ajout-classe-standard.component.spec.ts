import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutClasseStandardComponent } from './ajout-classe-standard.component';

describe('AjoutClasseStandardComponent', () => {
  let component: AjoutClasseStandardComponent;
  let fixture: ComponentFixture<AjoutClasseStandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutClasseStandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutClasseStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
