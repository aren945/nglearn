import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildeComponentComponent } from './childe-component.component';

describe('ChildeComponentComponent', () => {
  let component: ChildeComponentComponent;
  let fixture: ComponentFixture<ChildeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
