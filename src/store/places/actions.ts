import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';

import { searchApi } from '@/apis';
import { PlacesResponse } from '@/interfaces/places';


const actions: ActionTree<PlacesState, StateInterface> = {
    // La action recibe el commit para mutar el state
    getInitialLocation({ commit }) {
        //TODO: colocar loading

        // de la function navigator.geolocation del navegador, utilizamos el metodo getCurrencPosition
        navigator.geolocation.getCurrentPosition(
            // esto trae un objeto del cual hacemos destructuring y extraemos las coords 
            // y llamamos la mutation setLngLat enviando las coords
            ({ coords }) => commit('setLngLat', { lng: coords.longitude, lat: coords.latitude }),
            (err) => {
                console.error(err);
                throw new Error('No geolocation :(')
            }
        )
    },

    //TODO: colocar el valor de retorno
    async searchPlacesByTerm({ commit, state }, query: string) {

        const resp = await searchApi.get<PlacesResponse>(`/${ query }.json`, {
            params: {
                proximity: state.userLocation?.join(',')
            }
        });

    }
}



export default actions;