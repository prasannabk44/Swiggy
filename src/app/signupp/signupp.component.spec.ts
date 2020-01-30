import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignuppComponent } from './signupp.component';

describe('SignuppComponent', () => {
  let component: SignuppComponent;
  let fixture: ComponentFixture<SignuppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignuppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignuppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
