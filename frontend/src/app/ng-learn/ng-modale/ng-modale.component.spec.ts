import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModaleComponent } from './ng-modale.component';

describe('NgModaleComponent', () => {
  let component: NgModaleComponent;
  let fixture: ComponentFixture<NgModaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgModaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgModaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
