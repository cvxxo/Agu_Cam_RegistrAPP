# RegistrAPP_Canales_Valenzuela_007D
Repositorio de proyecto semestral "REGISTRAR ASISTENCIA" (Docente: genera QR, Alumno: lee QR), Duoc UC: programación de aplicaciones móviles 2023-2

1. Primero debemos descargar node.js para que funcionen los comandos de instalación npm.
En el simbolo del sistema tendremos que ejecutar los siguientes comandos de instalación npm:
    versión 6 de ionic ---> instalación: npm install -g @ionic/cli@6
    Framework Angular ---> instalación: npm install -g @angular/cli
    json-server ---> instalación: npm install -g json-server

2. Luego debemos crear una app de tipo angular. Para el sitio web de los docentes.
   En el simbolo del sistema, ubicados en la carpeta donde queremos que se instale la app ejecutamos:
     ng new RegistrApp.

3. Debemos reemplazar la carpeta src de la app de angular que creamos en el paso 2, por la carpeta src de este repositorio.

4. Después de haber reemplazado la carpeta src ejecutamos en la carpeta de la app:
    ng serve -o

6. Por último, entramos en la carpeta src, luego entramos en app y por último en data. Una vez en data ejecutamos el siguiente comando:
   json-server --watch docentes.json --host 0.0.0.0 --port 3300

7. Nuestra aplicación está funcionando, copia el siguiente enlace en cualquier navegador http://localhost:4200/registro-d
