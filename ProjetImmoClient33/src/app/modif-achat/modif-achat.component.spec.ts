import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifAchatComponent } from './modif-achat.component';

describe('ModifAchatComponent', () => {
  let component: ModifAchatComponent;
  let fixture: ComponentFixture<ModifAchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifAchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
