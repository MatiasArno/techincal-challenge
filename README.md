# Technical challenge | Imajine Studio #

# Desarrollar una calculadora que cuente con:

   - Los operadores necesarios: suma (+), resta (-), multiplicación (*) y división (/).
   - Las operaciones sean con dos operandos: X + Y = Z.
   - Los cálculos deben realizarse en el Backend, a través de una API REST.
   - Los parámetros (operadores y operandos) pueden estar en inputs o selects diferentes.
   - Guardar el historial de operaciones en una DB.
   - Mostrar el historial de cálculos realizados.

# Aclaraciones:  

   - No es necesario login ni registro.
   - Backend con NodeJS o PHP.
   - No se pueden utilizar frameworks.

# Puntos extra:

   - API REST.
   - Calculadora en el path: '/'.
   - Historial de resultados, path: '/history'.

# --- Instrucciones de uso --- #

   - El programa se inicia con el comando "npm start". Hacer una petición POST a la ruta '/' en formato texto, con el cálculo que se quiere realizar, para obtener el resultado como respuesta. Por ejemplo: 26+3, 500/5, 180*5, etc...

   - Para borrar el historial de operaciones hacer una petición POST a la ruta '/' en formato texto, con la palabra clave reservada "clear all".

   - En la ruta '/history' se encuentra el historial de operaciones. A medida que se realizan, se van agregando a 'history.json' con un ID correspondiente y toda la información de la operación.

   - El módulo "server.js" se encarga de crear el servidor http y de establecer las acciones de correspondientes a cada petición, y delega las acciones a "controller.js".

   - El módulo "controller.js" consta de tres funciones. "processParams()" se encarga de parsear los argumentos obtenidos, generando un objeto que se lo pasa como parámetro a la funcion "operations()" encargada de delegar las acciones al módulo "operations.js" y así realizar los cálculos. Por útlimo la función "showHistory()" que muestra el historial de operaciones. Además, "processParams()" se encarga de actualizar la base de datos cada vez que se realiza una operación.

   - El módulo "operations.js" se encarga de realizar los cálculos y de accionar sobre la base de datos "history.json".   