<script lang="ts" src="./MapView.ts"></script>

<template>
    <!-- Si isUserLocationReady es false muestra el loading -->
    <div v-if="!isUserLocationReady" 
        class="loading-map d-flex justify-content-center align-items-center">
        <div class="text-center">
            <h3>Espere por favor...</h3>
            <span>Localizando</span>
        </div>
    </div>

    <!-- Muestr solo cuando isUserLOactionReady -->
    <div v-show="isUserLocationReady"
        ref="mapElement"
        class="map-container"
     />

</template>

<style scoped>
.loading-map{
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 999;
}

.map-container {
    position: fixed;
    width: 100vw;
    height: 100vh;
}
</style>