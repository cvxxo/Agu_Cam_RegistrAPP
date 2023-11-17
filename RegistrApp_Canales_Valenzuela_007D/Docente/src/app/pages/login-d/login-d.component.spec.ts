import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDComponent } from './login-d.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

describe('LoginDComponent', () => {
  let component: LoginDComponent;
  let fixture: ComponentFixture<LoginDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginDComponent],
      imports:[HttpClientModule, FormsModule]
    });
    fixture = TestBed.createComponent(LoginDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
/*
  it('should create', () => {
    expect(component).toBeTruthy();
  });*/

  it('Recibir datos login', () => {
    component.sendLogin.correo = "prueba@gmail.com"
    component.sendLogin.contrasena = "abc12345"

    expect(component.sendLogin.correo).toEqual('prueba@gmail.com')
    expect(component.sendLogin.contrasena).toEqual('abc12345')
    
  })

});
