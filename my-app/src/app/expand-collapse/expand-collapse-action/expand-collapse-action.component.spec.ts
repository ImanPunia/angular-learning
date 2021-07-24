import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandCollapseActionComponent } from './expand-collapse-action.component';

describe('ExpandCollapseActionComponent', () => {
  let component: ExpandCollapseActionComponent;
  let fixture: ComponentFixture<ExpandCollapseActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandCollapseActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandCollapseActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
