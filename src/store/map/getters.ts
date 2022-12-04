import { GetterTree } from 'vuex';
import { MapState } from './state';
import { StateInterface } from '../index';


const getters: GetterTree<MapState, StateInterface> = {
    isMapReady( state  ) {
        // Doble negacion para pasar de undefined a false y de false a true
        return !!state.map;
    }
}



export default getters;