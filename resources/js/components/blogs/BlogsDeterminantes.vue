<template>
    <navigation></navigation>
    <br>
    <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12" id="app">
            <div class="card">
                <div class="card-body">
                    <h1>Determinantes</h1>
                    <p>
                        Las determinantes son un número real calculado únicamente para matrices cuadradas,
                         dicho calculo depende del tamaño de la matriz, por ejemplo, si se trata de una matriz 
                         con tamaño 2X2, es decir que si la matriz tiene 2 filas y 2 columnas, se aplica un método 
                         que consiste en restar la multiplicación entre los elementos de la diagonal principal con 
                         las de la diagonal secundaria, pero si es una matriz 3X3, se aplicará un método llamado ‘Regla de Sarrus’, 
                         y si es una matriz de 4X4, se procederá con un método denominado ‘Regla de Laplace’. A continuación, se mencionará con más detalle la información de las matrices.
                    </p>
                    <h4>Determinantes 2x2</h4>
                    <p>
                        Las determinantes 2X2, como su nombre indica, son un número real que se calcula únicamente para
                        matrices de 2 filas y 2 columnas, para calcular dicho número, se resta la multiplicación de los 
                        elementos de la diagonal principal, con la multiplicación de la diagonal secundaria de la misma
                        matriz. En otras palabras, el elemento de la primera fila y columna multiplicado por el elemento
                        de la segunda fila y columna, menos la multiplicación del elemento de la primera fila, pero de la
                         segunda columna multiplicado por el elemento de la segunda fila, pero de la primera columna.
                    </p>
                    <h4>Determinantes 3X3</h4>
                    <p>
                        La determinante de una matriz 3X3 se calcula por medio de la regla de ‘Sarrus’, dicha regla consiste en 
                        lo siguiente; primero duplica los elementos de las primeras 2 filas de la matriz y las agregas después de 
                        la 3° fila, esto con el fin de poder multiplicar en todas las filas de la matriz, o también se pueden duplicar
                         las dos primeras columnas y agregarlas después de la 3° columna, al final se tendrá el mismo resultado, el segundo 
                         paso consiste en sumar las multiplicaciones de los elementos de las diagonales principales.

                    </p>
                    <p>
                        Después de eso, se realiza el mismo procedimiento con los elementos de las diagonales secundarias, 
                        pero a cada uno de los resultados que se obtienen tras las multiplicaciones diagonales secundarias 
                        pasarán a invertir su signo, es decir que, si el resultado es positivo, pasa a ser negativo, o viceversa. 
                        En resumen, extender la matriz agregando 2 filas más o 2 columnas más, y después sumar las multiplicaciones 
                        de las diagonales principales con las de las diagonales segundarias, solo que estas segundas tendrán los signos invertidos.
                    </p>
                    <p>
                        También la determinante de una matriz 3X3 se puede calcular por medio de la regla de ‘Laplace’ que consiste en seleccionar la 
                        primera fila de la matriz, y a base de esta, se divide la matriz en matrices más pequeñas. En otras palabras, primero se selecciona 
                        la primera fila de la matriz, ahora, a cada elemento de la fila es multiplicada por una nueva matriz cuadrada 2X2, pero más pequeña 
                        en donde sus elementos serán los de la matriz base, excepto los elementos de la fila y columna del elemento seleccionado anteriormente para multiplicar la nueva matriz.
                    </p>
                    <p>
                        De la fila seleccionada no todos los valores permanecen con el mismo signo, según la regla de ‘Laplace’, la fila seleccionada será 
                        alterada de la siguiente forma: [+ - +]. El primer elemento de la fila permanece igual como está, pero la segunda se invierte el signo, 
                        en otras palabras, pasa a ser negativo, pero si el valor es negativo, entonces pasa a ser positivo, y el tercer elemento de la fila permanece 
                        positivo. Nunca se debe dejar pasar por alto esta característica porque si no, el resultado puede no ser el correcto.
                    </p>
                    <p>
                        Con cada nueva matriz 2X2, se busca la determinante. Una vez conseguida la determinante, se multiplica la determinante con el elemento 
                        seleccionado de la fila. Y una vez multiplicado los valores, se procede a sumar los resultados obtenidos anteriormente. Una característica 
                        de la regla de ‘Laplace’ es que se puede aplicar también en matrices 4X4 o superior. Posteriormente se explicará con más detalle los procedimientos 
                        para este tipo de matrices y algunas ventajas.
                    </p>
                    <h4>Determinantes 4x4</h4>
                    <p>
                        Como se mencionó anteriormente, la determinante de una matriz 4X4 o superior, se puede calcular por medio de la regla de ‘Laplace’. 
                        Es el mismo procedimiento que se mencionó anteriormente, primero se selecciona la primera fila de la matriz, y de cada elemento de la 
                        fila es multiplicada por el resultado de la determinante de la nueva matriz generada, en este caso se forma una matriz 3X3, y luego se 
                        procede a sumar y restar. Ahora la ventaja que se mencionó previamente, se puede obtener la determinante de la matriz 3X3 por medio de la 
                        regla de ‘Laplace’ o por medio de la regla de ‘Sarrus’, al final se obtiene el mismo resultado.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
    


</template>


<script>
import { reactive } from "vue";
import navigation from './BlogsNav.vue'
export default {
    components: {
        navigation,
  },
}
</script>