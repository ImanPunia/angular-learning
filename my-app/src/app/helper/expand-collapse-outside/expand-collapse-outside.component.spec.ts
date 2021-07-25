import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandCollapseOutsideComponent } from './expand-collapse-outside.component';

describe('ExpandCollapseOutsideComponent', () => {
  let component: ExpandCollapseOutsideComponent;
  let fixture: ComponentFixture<ExpandCollapseOutsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandCollapseOutsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandCollapseOutsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
