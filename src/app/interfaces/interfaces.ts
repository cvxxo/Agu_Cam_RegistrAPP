export interface iDocente{
    correo:string,
    nombre:string,
    apellido:string,
    contrasena:string,
    idAsignatura1:number,
    idAsignatura2:number
}

export interface iDocenteP{
    id:number,
    correo:string,
    nombre:string,
    apellido:string,
    contrasena:string,
    idAsignatura1:number,
    idAsignatura2:number
}

export interface iAsig{
    id:number,
    nombre:string,
    seccion:string,
    año: number,
    semestre: number,
    horas_sem: number
}