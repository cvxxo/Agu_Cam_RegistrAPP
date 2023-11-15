# RegistrAPP_Canales_Valenzuela_007D
Repositorio de proyecto semestral "REGISTRAR ASISTENCIA" (Docente: genera QR, Alumno: lee QR), Universidad: Duoc UC, Asignatura: programación de aplicaciones móviles Año: 2023-2



1. Primero debemos descargar node.js para que funcionen los comandos de instalación npm.
En el simbolo del sistema tendremos que ejecutar los siguientes comandos de instalación npm:
    versión 6 de ionic ---> npm install -g @ionic/cli@6
    Framework angular versión 16 ---> npm install -g @angular/cli@16
    json-server ---> instalación: npm install -g json-server
    generarQR ---> 1) npm install -D types/qrcode --save  |  2) npm install angularx-qrcode --save  |  Para el 2 depende de la versión de angular https://www.npmjs.com/package/angularx-qrcode

<<<<<<< HEAD

Todo para instalar app angular RegistrAppDocente.

1. Crear app de tipo angular. Para el sitio web de los docentes.
=======
3. Luego debemos crear una app de tipo angular. Para el sitio web de los docentes.
>>>>>>> 8399801a0131a846b340b31732fe26fa76b4ff24
   En el simbolo del sistema, ubicados en la carpeta donde queremos que se instale la app ejecutamos:
     ng new RegistrApp. ELejimos css.

<<<<<<< HEAD
2. Reemplazar la carpeta src de la app angular por la de este repositorio.

3. Abrimos el simbolo del sistema dentro de la carpeta general de la app angular, y ejecutamos:
    ng serve -o

4. Entrar en la carpeta src, luego entramos en app y por último en data. Una vez en data ejecutamos el siguiente comando:
=======
4. Debemos reemplazar la carpeta src de la app de angular que creamos en el paso 2, por la carpeta src de este repositorio.

5. Después de haber reemplazado la carpeta src ejecutamos en la carpeta de la app:
    ng serve -o

6. Entrar en la carpeta src, luego entramos en app y por último en data. Una vez en data ejecutamos el siguiente comando:
>>>>>>> 8399801a0131a846b340b31732fe26fa76b4ff24
   json-server --watch docentes.json --host 0.0.0.0 --port 3300

5. Nuestra aplicación Angular está funcionando, copia el siguiente enlace en cualquier navegador http://localhost:4200/registro-d


Todo para instalar app Ionic RegistrAppAlumnos.

1. Crear app de tipo ionic. Para la aplicación mobile.
   En el simbolo del sistema, ubicados en la carpeta donde queremos que se instale la app ejecutamos: ionic start RegistrAppA blank, elejimos angular, css.

2. Reemplazar la carpeta src de la app ionic por la de este repositorio.

3. Abrimos el simbolo del sistema dentro de la carpeta general de la app ionic, y ejecutamos:
    ionic lab

4. Nuestra aplicación Angular está funcionando, copia el siguiente enlace en cualquier navegador http://localhost:8200/