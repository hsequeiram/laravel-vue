<template>
    <navigation></navigation>
    <br>
    <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12" id="app">
            <div class="card">
                <div class="card-body">
                    <h1>Inversa de una matriz </h1>
                    <p>
                        El determinante de una matriz cuadrada con el mismo número de filas y de columnas, se obtiene de restar la multiplicación de los 
                        elementos de la diagonal principal de la matriz y la multiplicación de loa elementos de la diagonal secundaria de la misma matriz.
                    </p>
                    <p>
                        Si se deseamos realizar este cálculo necesitamos una matriz cuadrada de orden m x n, donde m son las filas y n las columnas, siendo
                         siempre m=n. Esto es lo que llamamos dimensión de la matriz. Para matrices de orden superior a 2 x 2. Si el resultado del determinante
                          es cero (nulo), estaremos ante un sistema p matriz singular de ecuaciones lineales, y el resultado es distinto de cero, estaremos ante sistema o matriz no singular.
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