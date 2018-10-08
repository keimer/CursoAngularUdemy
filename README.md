# CursoAngularUdemy
## Instalaciones: 
Ver archivo Instalaciones-Necesarias.pdf
1. nodejs:
	Download nodejs e instalar siguiendo las instrucciones (next-next).
	node -v    --> Para ver la versión.

2. npm:
	npm install npm@latest -g
	npm install npm@5.6.1 -g
	npm -v

3. typescript:
	npm install -g typescript
	tsc -v

4. Angular CLI:
	npm install -g @angular/cli				 --> instala la última versión
	npm install -g @angular/cli@X.X.X  --> instala una versión especifica
	ng -v

5. ionic:
	npm install -g ionic

6. Instalar todos los plugins del Visual Studio Code indicados en el archivo Instalaciones-necesarias.pdf

## Configuración de TypeScript:
1. tsc <nombreArchivo> -w    --> Sirve para observar los cambios en los archivos .ts y los compila para .js
2. tsc -init		--> Observa cualquier cambio en cualquier archivo .ts y lo compila para .js y crea un archivo de configuración tsconfig.json
3. tsc 		--> recarga la configuración del archivo tsconfig.json y recompila los archivos .ts

Repaso TypeScript