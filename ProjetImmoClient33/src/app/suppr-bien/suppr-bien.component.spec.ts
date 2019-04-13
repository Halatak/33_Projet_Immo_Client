import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprBienComponent } from './suppr-bien.component';

describe('SupprBienComponent', () => {
  let component: SupprBienComponent;
  let fixture: ComponentFixture<SupprBienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupprBienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
