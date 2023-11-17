export interface iAlumnos{
    correoA:string,
    nombreA:string,
    apellidoA:string,
    contrasenaA:string
}

export interface iAlumnosId{
    id:number,
    correoA:string,
    nombreA:string,
    apellidoA:string,
    contrasenaA:string
}

export interface ialumnosPresentesId{
    id:number,
    idClase:number,
    nomYApe:string,
    correoA:string,
    asignatura:string,
    fecha:string
}

export interface ialumnosPresentes{
    idClase:number,
    nomYApe:string,
    correoA:string,
    asignatura:string,
    fecha:string
}

export interface igenerarQR{
    id:number,
    nomYApeD:string,
    correoD:string,
    fecha:string,
    asignatura:string
}