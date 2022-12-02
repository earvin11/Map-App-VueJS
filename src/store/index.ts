import { createStore } from 'vuex';

// My custom modules

// places
import placesModule from './places';
import { PlacesState } from './places/state';

// map
import mapModule from './map';
import { MapState } from './map/state';


export interface StateInterface {
  // Define your own store structure, using submodules if needed
  // example: ExampleStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  // example: ExampleStateInterface
  places: PlacesState,
  map: MapState
}

export default createStore<StateInterface>({
  modules: {
    // example: exampleModule
    places: placesModule,
    map: mapModule
  }
});