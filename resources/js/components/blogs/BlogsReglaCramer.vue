<template>
    <navigation></navigation>
    <br>
    <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12" id="app">
            <div class="card">
                <div class="card-body">
                    <h1>Regla de  cramer</h1>
                    <p>
                        Según (Ochoa García, S. I. & Gutiérrez González, E. (2015), página 170) Sistema de ecuaciones 
                        lineales. Cuando se tiene un conjunto de ecuaciones lineales se le llama sistema de ecuaciones 
                        lineales. Por su parte, se llama solución del sistema a los valores de las variables que satisfacen 
                        a todas las ecuaciones del sistema. Mientras que el orden del sistema está determinado por el producto 
                        m x n, donde m es la cantidad de ecuaciones y a la cantidad de variables.
                    </p>
                    <p>
                        La regla de Cramer un método para resolver sistemas de ecuaciones que usan determinantes. Esta técnica,
                        conocida como regla de Cramer, data de mediados del siglo XVIII y lleva el nombre de su inventor, 
                        el matemático suizo Gabriel Cramer (1704-1752), quien la introdujo en 1750 
                        en Introduction a l'Analyse des lignes Courbes algébriques "Introducción al análisis de curvas algebraicas".
                         La regla de Cramer es una forma práctica y eficiente de calcular soluciones para sistemas con cualquier cantidad de
                          incógnitas. siempre que tengamos el mismo número de ecuaciones que de incógnitas.
                    </p>
                    <p>
                        La regla de Cramer nos da la solución única de un sistema de ecuaciones, si existe. Sin embargo, 
                        si el sistema no tiene solución o tiene infinitas soluciones, esto se indica con un determinante cero.
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