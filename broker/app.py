from tasks import hola, sumar_numeros, compressZip
# Para ejecutar una función en forma de tarea lo tenemos que hacer de esta
hola.delay('Mundo!')
# Para ejecutar la función sumar:
sumar_numeros.delay(3, 2)

compressZip.delay('sin_comprimir/Captura de pantalla 2022-08-01 163851.png', 'x.zip', 'comprimidos')