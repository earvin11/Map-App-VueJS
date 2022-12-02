import { defineComponent, ref, onMounted, watch } from 'vue';
import { usePlacesStore } from '../../composables/usePlacesStore';
import Mapboxgl from 'mapbox-gl';

export default defineComponent({
    name: 'MapView',
    setup() {

        const mapElement = ref<HTMLDivElement>()
        const { userLocation, isUserLocationReady } = usePlacesStore();

        const initMap = async() => {
            if( !mapElement.value ) throw new Error('Div Element no exist')
            if( !userLocation.value ) throw new Error('UserLocation no existe')

            // Esto es para generar un leve retraso de tiempo y cargar bien la vista del mapas
            await Promise.resolve();
            
            const map = new Mapboxgl.Map({
                container: mapElement.value, // container ID
                style: 'mapbox://styles/mapbox/light-v10', // style URL
                center: userLocation.value,
                zoom: 15, // starting zoom
            });

            const myLoactionPopup = new Mapboxgl.Popup()
                .setLngLat( userLocation.value )
                .setHTML(`
                    <h4>Aqui estoy</h4>
                    <p>Actualmente en Alajuela</p>
                    <p>${ userLocation.value }</p>
                `);

            const myLocationMarker = new Mapboxgl.Marker()
                .setLngLat( userLocation.value )
                .setPopup( myLoactionPopup )
                .addTo( map );
        }

        onMounted(() => {
            if( isUserLocationReady.value ) return initMap();
        });

        watch( isUserLocationReady, ( newVal ) => {
            if( isUserLocationReady.value ) initMap(); 
        })

        return {
            isUserLocationReady,
            mapElement
        }
    }
});