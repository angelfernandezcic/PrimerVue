<template>
	<div id="header">
		<nav class="navbar navbar-default">
			<div class="container-fluid">
				<div class="navbar-header">
					<a class="navbar-brand" href="#"><img :src="header.logo" :alt="header.nombre"></a>
				</div>
				<ul class="nav navbar-nav">
					<li><router-link to="/"><i class="fa fa-home" aria-hidden="true"></i>Home</router-link></li>
					<li><router-link to="/Peliculas"><i class="fa fa-plus-circle" aria-hidden="true">Peliculas</i></router-link></li>
					<li><router-link to="/Entradas"><i class="fa fa-list" aria-hidden="true"></i>Entradas</router-link></li>
				</ul>
			</div>
		</nav>
	</div>
</template>

<script src="./Header.js" type="text/javascript" charset="utf-8"></script>
<style src="./Header.css" type="text/css" media="screen"></style>