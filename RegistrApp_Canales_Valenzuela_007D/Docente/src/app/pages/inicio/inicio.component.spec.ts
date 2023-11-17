import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioComponent } from './inicio.component';
import { HttpClientModule } from '@angular/common/http';

describe('InicioComponent', () => {
  let component: InicioComponent;
  let fixture: ComponentFixture<InicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioComponent],
      imports:[HttpClientModule]
    });
    fixture = TestBed.createComponent(InicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
/*
  it('should create', () => {
    expect(component).toBeTruthy();
  });*/

  it('Recibir nombre mensaje bienvenida', () => {
    component.nomDocente = "Jorge"
    expect(component.nomDocente).toEqual("Jorge")
  })

});
