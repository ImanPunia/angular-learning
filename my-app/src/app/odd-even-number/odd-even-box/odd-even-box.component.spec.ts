import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OddEvenBoxComponent } from './odd-even-box.component';

describe('OddEvenBoxComponent', () => {
  let component: OddEvenBoxComponent;
  let fixture: ComponentFixture<OddEvenBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OddEvenBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OddEvenBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
