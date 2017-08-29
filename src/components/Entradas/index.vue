<template>
    <div id="Entradas">
        <h3>Entradas</h3>
        <div class="list-group">
		  <a v-for="entrada in entradasArray" href="#" class="list-group-item list-group-item-action">B{{entrada.Butaca}} - F{{entrada.Fila}}</a>
		</div>
    </div>
</template>

<script src="./Entradas.js" type="text/javascript" charset="utf-8"></script>
<style src="./Entradas.css" type="text/css" media="screen"></style>