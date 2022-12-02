import { MutationTree } from 'vuex';
import { PlacesState } from './state';


const mutation: MutationTree<PlacesState> = {
    setLngLat(  state: PlacesState, { lng, lat }: { lng: number, lat: number } ) {
        // a line to prevent linter errors

        // recibiremos las coords y se las establecemos a la userLocation y colocamos el loading en false
        state.userLocation = [ lng, lat ];
        state.isLoading = false;
    }
}


export default mutation;