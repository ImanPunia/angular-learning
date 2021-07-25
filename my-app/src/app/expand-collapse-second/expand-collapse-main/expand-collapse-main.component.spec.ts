import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandCollapseMainComponent } from './expand-collapse-main.component';

describe('ExpandCollapseMainComponent', () => {
  let component: ExpandCollapseMainComponent;
  let fixture: ComponentFixture<ExpandCollapseMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandCollapseMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandCollapseMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
