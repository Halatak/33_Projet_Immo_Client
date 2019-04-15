import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutAchatComponent } from './ajout-achat.component';

describe('AjoutAchatComponent', () => {
  let component: AjoutAchatComponent;
  let fixture: ComponentFixture<AjoutAchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutAchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
