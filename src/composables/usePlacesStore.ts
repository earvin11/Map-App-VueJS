import { computed, onMounted } from 'vue';
import { useStore } from 'vuex'
import { StateInterface } from '@/store'

// Composable para tener acceso a todas la propiedades del modulo place del store
export const usePlacesStore = () => {

    const store = useStore<StateInterface>();


    // Cuando se llame este compasable verificara si dentro del store, en el modulo places tenemos el userLoaction
    onMounted( () => {
        // Si no tenemos la localizacion de usuario haz dispatch de la action del modulo places 'getInitiaLocation'
        if( !store.getters['places/userLocation']) {
            store.dispatch('places/getInitialLocation')
        }
    })


    return {
        // State
        isLoading: computed( () => store.state.places.isLoading),
        userLocation: computed( () => store.state.places.userLocation),
        places: computed( () => store.state.places.places ),
        isLoadingPlaces: computed( () => store.state.places.isLoadingPlaces ),

        // Getters
        isUserLocationReady: computed<boolean>( () => store.getters['places/isUserLocationReady']),

        // Actions
        searchPlacesByTerm: (query = '') => store.dispatch('places/searchPlacesByTerm', query),

        // Mutations
    }
}