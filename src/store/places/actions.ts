import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';

import { searchApi } from '@/apis';
import { Feature, PlacesResponse } from '@/interfaces/places';


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
    async searchPlacesByTerm({ commit, state }, query: string): Promise<Feature[]> {

        if( query.length === 0 ) {
            //TODO: setPlaces
            commit('setPlaces', [])
            return [];
        }

        if( !state.userLocation ) {
            throw new Error('No hay ubicacion del usuario')
        }

        // Luego de las validaciones colocar el loading de places
        commit('setIsLoadingPlaces');

        const resp = await searchApi.get<PlacesResponse>(`/${ query }.json`, {
            params: {
                proximity: state.userLocation?.join(',')
            }
        });

        // Luego de obtenidos los datos hacer el commit a los places y quitar el loading con esta mutation
        commit('setPlaces', resp.data.features);

        return resp.data.features;

    }
}



export default actions;