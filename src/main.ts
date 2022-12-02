import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoiZWFydmluMTEiLCJhIjoiY2xiNHp3ZzBiMDFwczN5cGozOWZwY3VlYyJ9.wtgmNkvlGEXzVHGdu-ce4w';

if( !navigator.geolocation ) {
    alert('Tu navegador no soporta el GeoLocation');
    throw new Error('Tu navegador no soporta el GeoLocation');
}

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
