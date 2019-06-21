import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthRemberComponentComponent } from './auth-rember-component.component';

describe('AuthRemberComponentComponent', () => {
  let component: AuthRemberComponentComponent;
  let fixture: ComponentFixture<AuthRemberComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthRemberComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthRemberComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
