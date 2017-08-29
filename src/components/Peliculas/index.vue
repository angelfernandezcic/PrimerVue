<template>
    <div id="Peliculas">
        <h3>Peliculas</h3>
        <div class="list-group">
		  <a v-for="pelicula in peliculasArray" href="#" class="list-group-item list-group-item-action">{{pelicula.Titulo}}</a>
		</div>
    </div>
</template>

<script src="./Peliculas.js" type="text/javascript" charset="utf-8"></script>
<style src="./Peliculas.css" type="text/css" media="screen"></style>