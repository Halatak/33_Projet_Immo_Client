import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResaVisiteComponent } from './resa-visite.component';

describe('ResaVisiteComponent', () => {
  let component: ResaVisiteComponent;
  let fixture: ComponentFixture<ResaVisiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResaVisiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResaVisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
