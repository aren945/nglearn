import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLifeComponent } from './component-life.component';

describe('ComponentLifeComponent', () => {
  let component: ComponentLifeComponent;
  let fixture: ComponentFixture<ComponentLifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentLifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
