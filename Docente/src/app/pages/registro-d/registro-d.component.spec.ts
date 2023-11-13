import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDComponent } from './registro-d.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('RegistroDComponent', () => {
  let component: RegistroDComponent;
  let fixture: ComponentFixture<RegistroDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroDComponent],
      imports:[HttpClientModule, ReactiveFormsModule, FormsModule]
    });
    fixture = TestBed.createComponent(RegistroDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/

  it('Formulario valido', ()=>{
    let correo = component.valFormReg.controls['corD']
    let nombre = component.valFormReg.controls['nomD']
    let apellido = component.valFormReg.controls['apeD']
    let contra = component.valFormReg.controls['conD']
    let idAsig1 = component.valFormReg.controls['ida1']
    let idAsig2 = component.valFormReg.controls['ida2']

    correo.setValue('prueba@gmail.com')
    nombre.setValue('Jorge')
    apellido.setValue('Muñoz')
    contra.setValue('abc12345')
    idAsig1.setValue('1')
    idAsig2.setValue('2')

    expect(component.valFormReg.invalid).toBeFalse();
  })

  it('Formulario invalido', ()=>{
    let correo = component.valFormReg.controls['corD']
    let nombre = component.valFormReg.controls['nomD']
    let apellido = component.valFormReg.controls['apeD']
    let contra = component.valFormReg.controls['conD']
    let idAsig1 = component.valFormReg.controls['ida1']
    let idAsig2 = component.valFormReg.controls['ida2']

    correo.setValue('prueba@gmail.com')
    nombre.setValue('Jo')
    apellido.setValue('Mu')
    contra.setValue('abc1234')
    idAsig1.setValue('')
    idAsig2.setValue('')

    expect(component.valFormReg.invalid).toBeTrue();
  })

});
