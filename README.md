1. Inicializar estado para:
   - pesoActual (número)
   - pesoAnterior (número)
   - bloques (lista de objetos con propiedades: nombre, completado)
   - todosCompletados (booleano)

2. Al cargar la aplicación:
   - Cargar datos desde localStorage (si existen) y actualizar el estado correspondiente.
   - Verificar si es un nuevo día:
     - Si es un nuevo día, reiniciar los checkbox de los bloques.
     - Actualizar la fecha en localStorage.

3. Función para manejar el cambio de peso:
   - Actualizar pesoAnterior con el valor de pesoActual.
   - Actualizar pesoActual con el nuevo valor ingresado por el usuario.
   - Guardar ambos valores en localStorage.

4. Función para manejar el cambio en los checkbox:
   - Actualizar el estado del bloque correspondiente en la lista de bloques.
   - Verificar si todos los bloques están completados:
     - Si todos están completados, actualizar todosCompletados a verdadero.
   - Guardar el estado de los bloques en localStorage.

5. Renderizar la interfaz:
   - Mostrar pesoActual en la pantalla principal.
   - Si pesoAnterior existe, mostrarlo en texto más pequeño.
   - Mostrar los 5 bloques con sus respectivos checkbox y nombres (desayuno, colación 1, comida, colación 2, cena).
   - Si todosCompletados es verdadero, mostrar la leyenda "¡Lo lograste!".

6. Al reiniciar la aplicación o al inicio de un nuevo día:
   - Reiniciar los checkbox de los bloques.
   - Actualizar la fecha en localStorage.
   - Reiniciar todosCompletados a falso.

7. Guardar todos los cambios relevantes en localStorage para persistencia.