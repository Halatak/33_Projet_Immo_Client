import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderConseillerComponent } from './header-conseiller.component';

describe('HeaderConseillerComponent', () => {
  let component: HeaderConseillerComponent;
  let fixture: ComponentFixture<HeaderConseillerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderConseillerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderConseillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
