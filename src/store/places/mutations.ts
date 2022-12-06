import { MutationTree } from 'vuex';
import { PlacesState } from './state';
import { Feature } from '@/interfaces/places';


const mutation: MutationTree<PlacesState> = {
    setLngLat(  state: PlacesState, { lng, lat }: { lng: number, lat: number } ) {
        // a line to prevent linter errors

        // recibiremos las coords y se las establecemos a la userLocation y colocamos el loading en false
        state.userLocation = [ lng, lat ];
        state.isLoading = false;
    },

    setIsLoadingPlaces( state ) {
        state.isLoadingPlaces = true;
    },

    setPlaces( state, places: Feature[] ) {
        state.places = places;
        state.isLoadingPlaces = false;
    }
}


export default mutation;