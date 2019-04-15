import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifLocationComponent } from './modif-location.component';

describe('ModifLocationComponent', () => {
  let component: ModifLocationComponent;
  let fixture: ComponentFixture<ModifLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
