# Git Desarrollo Colaborativo

Esto es una guia practica para los alumnos que cursan los dias _viernes a las 10hs_ en __EducacionIT__ el curso de __Git Desarrollo Colaborativo__, el objetivo de la misma es facilitar el entendimiento de los comandos y configuracion de la herramienta utilizada para _el control de versiones_.

## Configuracion Inicial

* __git init:__ inicializa un repositorio de git en el directorio actual
* __git user.name `username`:__ define el nombre de usuario para las confirmaciones 
* __git user.email `email`:__ define el correo de contacto que se muestra en el registro de cambios

## Gestion de Cambios

* __git status:__ muestra el estado de los archivos comparando el _Working Directory_ con el _Staging Area (INDEX)_
* __git add `file`:__ agrega al _Staging Area (INDEX)_ los archivos indicados, realizando la _captura de codigo (Snapshot)_
* __git commit:__ realiza la confirmacion de la captura, almacenando los cambios en un _archivo BLOB (Binary Large Object)_
* __git log:__ muestra el historial de confirmaciones, donde los commits se identifican por su un numero de _Hash_

## Repositorio Remoto

* __git remote -v:__ muestra los repositorios remotos gestionados, incluyendo la url de los mismos
* __git remote add `alias` `url`:__ agrega una nueva direccion remota, donde podremos subir los cambios
* __git remote rename `old_name` `new_name`:__ cambia el nombre de algun repositorio remoto
* __git remote set-url `alias` `url`:__ modifica la url del repositorio remoto seleccionado
* __git remote remove `alias`:__ elimina el repositorio remoto de la lista de direcciones remotas