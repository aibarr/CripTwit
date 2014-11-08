CripTwit
========

Laboratorio destinado a la Asignatura de Criptografía y Protocolos de seguridad. Es una aplicación que permite enviar mensajes de 140 de manera encriptada entre dos participantes.

Requerimientos
- Node.js 1.7.0
- Compilador de C (Le recomendamos que utilice alguna distribución de Linux o OSx)

Para instalar, descomprima el archivo ZIP en alguna carpeta de su computadora y acceda a ella mediante una terminal o ejecutor de comandos.
Desde ahí ejecute el comando

	npm install

Al hacerlo el gestor de paquetes de Node.js (NPM:Node Packet Manager) hará la instalación de las dependencias de este software. Una vez que se hayan terminado de instalar las dependencias, y de compilarlas según corresponda, el gestor de paquetes le devolverá automáticamente al terminal. Luego escriba en al misma terminal.

	node app.js

Con esto ejecutará el software CripTwit; verá el mensaje "Servidor iniciado..." indicando que el software está a la escucha.

Finalmente, abra en un navegador de su preferencia en cualquier equipo que pertenezca a la red desde donde está operando este software, y en la barra de direcciones escriba:

	http://(Dirección IP):3000

donde "Dirección IP" corresponde a la dirección desde donde está ejecutando CripTwit. Si lo hizo correctamente, verá la página de inicio que corresponde al software, donde le entrega las opciones para emitir o recibir mensajes.
