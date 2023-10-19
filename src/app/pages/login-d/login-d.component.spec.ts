import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDComponent } from './login-d.component';

describe('LoginDComponent', () => {
  let component: LoginDComponent;
  let fixture: ComponentFixture<LoginDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginDComponent]
    });
    fixture = TestBed.createComponent(LoginDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
