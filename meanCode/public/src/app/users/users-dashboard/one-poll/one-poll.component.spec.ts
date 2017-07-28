import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePollComponent } from './one-poll.component';

describe('OnePollComponent', () => {
  let component: OnePollComponent;
  let fixture: ComponentFixture<OnePollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnePollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnePollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
