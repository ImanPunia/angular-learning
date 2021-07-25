import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandCollapseParentComponent } from './expand-collapse-parent.component';

describe('ExpandCollapseParentComponent', () => {
  let component: ExpandCollapseParentComponent;
  let fixture: ComponentFixture<ExpandCollapseParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandCollapseParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandCollapseParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
