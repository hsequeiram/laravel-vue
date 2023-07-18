<template>
    
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary p-3">
      <div class="container-fluid">
        <router-link :to="{ name: 'blogs.index' }" class="navbar-brand">Algebra</router-link>
        <!-- <a class="navbar-brand" href="public/home">Algebra
        </a> -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    
        <div class=" collapse navbar-collapse" id="navbarNavDropdown" style="flex-grow: 0;">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link mx-2 active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'blogs.Determinantes' }" class="nav-link mx-2">Determinantes</router-link>
              <!-- <a class="nav-link mx-2" href="#">Determinantes</a> -->
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'blogs.ReglaCramer' }" class="nav-link mx-2">Regla de cramer</router-link>
              <!-- <a class="nav-link mx-2" href="#">Regla de cramer</a> -->
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'blogs.InversaMatriz' }" class="nav-link mx-2">Inversa de una Matriz</router-link>
              <!-- <a class="nav-link mx-2" href="#">Inversa de una Matriz</a> -->
              </li>
            </ul>
          <ul class="navbar-nav ms-auto d-none d-lg-inline-flex">
            <li class="nav-item mx-2">
              <a class="nav-link text-dark h5" href="" target="blank"><i class="fab fa-google-plus-square"></i></a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link text-dark h5" href="" target="blank"><i class="fab fa-twitter"></i></a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link text-dark h5" href="" target="blank"><i class="fab fa-facebook-square"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    

    
</template>

<script>
import { reactive } from "vue";
export default {
    name: "navigation",
};
</script>