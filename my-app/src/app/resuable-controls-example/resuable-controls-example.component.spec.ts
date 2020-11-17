import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResuableControlsExampleComponent } from './resuable-controls-example.component';

describe('ResuableControlsExampleComponent', () => {
  let component: ResuableControlsExampleComponent;
  let fixture: ComponentFixture<ResuableControlsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResuableControlsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResuableControlsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
