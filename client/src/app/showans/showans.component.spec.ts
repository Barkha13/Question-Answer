import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowansComponent } from './showans.component';

describe('ShowansComponent', () => {
  let component: ShowansComponent;
  let fixture: ComponentFixture<ShowansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
