# RegistrAPP_Canales_Valenzuela_007D
Repositorio de proyecto semestral "REGISTRAR ASISTENCIA" (Docente: genera QR, Alumno: lee QR), Universidad: Duoc UC, Asignatura: programación de aplicaciones móviles Año: 2023-2

PRUEBA VIDEO: https://duoccl0-my.sharepoint.com/:v:/g/personal/ag_valenzuelav_duocuc_cl/Edsz-GYImfFPvsbCZdxIT9AB71cZQr-hblYLkrFS4nHI_w?e=Jx6f6C

-. Primero debemos descargar node.js para que funcionen los comandos de instalación npm.
En el simbolo del sistema tendremos que ejecutar los siguientes comandos de instalación npm:
    versión 6 de ionic ---> npm install -g @ionic/cli@6
    Framework angular versión 16 ---> npm install -g @angular/cli@16
    json-server ---> instalación: npm install -g json-server

-. Crear app angular. Para el sitio web de los docentes. 
    ejecutamos: ng new nombreApp

-. Debemos reemplazar la carpeta src de la app de angular por la carpeta src de este repositorio.

-. Entrar en la carpeta src, luego entramos en app y por último en data. Una vez en data ejecutamos el siguiente comando:
    json-server --watch docentes.json --host "Aqui deben poner el ipV4 sin las comillas xd" --port 3300

-. Cambiar configuración de environments y environments.prod, reemplazar la (http://ipV4:4200/registro-d) ipV4 por la de su equipo. 

-. Crear app Ionic RegistrAppAlumnos. Para la app de los estudiantes.
    ejecutamos: ionic start RegistrAppA blank, luego, elejimos angulary por último css.

-. Reemplazar la carpeta src de la app ionic por la de este repositorio.

-. Abrimos cmd (simbolo del sistema) en la carpeta general de la app angular e instalamos:
    -npm install -D @types/qrcode --save. 
    -npm install angularx-qrcode --save. Depende de la versión de angular https://www.npmjs.com/package/angularx-qrcode?activeTab=readme

-. Abrimos cmd en la carpeta general de la app ionic e instalamos:
    -npm install @capacitor-community/barcode-scanner ---> más instrucciones luego de crear apk: https://github.com/capacitor-community/barcode-scanner
    -Para poder crear apk con android studio: npm i @capacitor/core
                                              npm i -D @capacitor/cli
                                              npm install @capacitor/android
                                              npx cap add android
                                              ionic build
    -Para sincronizar package instalados: npx cap sync
    -Para sincronizar cambios en el código: ionic capacitor sync android
    -Para abrir en android studio: npx cap open android

#Último paso. Abrimos el simbolo del sistema dentro de la carpeta general de la app ionic, y ejecutamos: ionic lab. 
                Nuestra aplicación ionic está funcionando, copia el siguiente enlace en cualquier navegador http://ipV4:8200/
#Último paso. Abrimos el simbolo del sistema dentro de la carpeta general y ejecutamos: ng serve -o.
                Nuestra aplicación Angular está funcionando, copia el siguiente enlace en cualquier navegador http://ipV4:4200/registro-d
